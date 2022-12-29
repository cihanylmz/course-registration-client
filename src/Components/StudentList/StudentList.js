import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Restricted from "../../PermissionProvider/Restricted";
const StudentList = ({ student }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://course-registration-api.onrender.com/studentAPI/students`);
      setStudents(result.data);
    };
    fetchData();
  });

  const [coursesModalOpen, setCoursesModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [courses, setCourses] = useState([]);

  const handleShowCoursesClick = async student => {
    setSelectedStudent(student);
    setCoursesModalOpen(true);
    try {
      console.log(student.courses);
      const result = student.courses;
      setCourses(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseCoursesModal = () => {
    setCoursesModalOpen(false);
    setSelectedStudent(null);
    setCourses([]);
  };

  return (
    <>
      <table className="table table-sm table-hover">
          <tbody>
              {students.map(student => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td><button className='btn btn-primary' onClick={() => handleShowCoursesClick(student)}>Show courses</button></td>
                </tr>
              ))}
          </tbody>
      </table>
      


      {coursesModalOpen && (
        <div>
          <h3>Courses for {selectedStudent.name}</h3>
          <ul className='list-group'>
            {courses.map(course => (
              <li className='list-group-item' key={course._id}>{course.name}</li>
            ))}
          </ul>
          <button className='btn btn-primary' onClick={handleCloseCoursesModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default StudentList;