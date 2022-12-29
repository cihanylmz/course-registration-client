import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    //Kurs listesini veri tabanından getirir.
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('https://course-registration-api.onrender.com/courseAPI/courses');
        //Response'tan gelen veriyi courses variable'ına atar.
        setCourses(result.data);
      };
      fetchData();
    });
  
    return (
        <div className="container">
        <table className="table table-sm table-hover">
            <tbody>
                {{/* Her kurs için bir row oluşturur. */}}
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