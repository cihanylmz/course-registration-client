import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Restricted from "../../PermissionProvider/Restricted";

const CourseList = () => {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('https://course-registration-api.onrender.com/courseAPI/courses');
        setCourses(result.data);
      };
      fetchData();
    });
  
    return (
        <div className="container">
        <table className="table table-sm table-hover">
            <tbody>
                {courses.map(course => (
                <tr key={course._id}>
                    <td>{course.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
      
    );
  }; 
  export default CourseList