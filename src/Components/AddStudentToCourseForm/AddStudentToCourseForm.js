import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Restricted from "../../PermissionProvider/Restricted";

const AddStudentToCourseForm = () => {
    const [studentId, setStudentId] = useState('');
    const [courseId, setCourseId] = useState('');
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const courseResult = await axios.get('http://localhost:8000/courses');
        setCourses(courseResult.data);
        const studentResult = await axios.get('http://localhost:8000/students');
        setStudents(studentResult.data);
      };
      fetchData();
    });
    
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        console.log(courseId + ' + ' + studentId);
        await axios.put(`https://course-registration-api.onrender.com/courseAPI/courses/${courseId}/studentAPI/students/${studentId}`);
        setStudentId('');
        setCourseId('');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <form className='form-inline' onSubmit={handleSubmit}>
        <label>
          Enroll a student to course:
          <select className='form-select' value={courseId} onChange={e => setCourseId(e.target.value)}>
            <option value="">Select a course</option>
            {courses.map(course => (
            <option key={course._id} value={course._id}>{course.name}</option>
            ))}
          </select>
          <select className='form-select' value={studentId} onChange={e => setStudentId(e.target.value)}>
            <option value="">Select a student</option>
            {students.map(student => (
            <option key={student._id} value={student._id}>{student.name}</option>
            ))}
          </select>
        </label>
        <button className='btn btn-primary' type="submit">Add Student</button>
      </form>
    );
  }; 
  export default AddStudentToCourseForm;