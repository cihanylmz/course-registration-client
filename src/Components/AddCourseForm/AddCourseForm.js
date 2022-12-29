import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Restricted from "../../PermissionProvider/Restricted";

const AddCourseForm = () => {
    const [name, setName] = useState('');
  
    const handleSubmit = async e => {
      e.preventDefault();
      await axios.post('https://course-registration-api.onrender.com/courseAPI/courses', { name });
      setName('');
    };
    return (

      <form className="form-inline needs-validation" onSubmit={handleSubmit}>
        <div className='input-group'>
            <input
            className='form-control'
            type="text"
            placeholder='Enter course name'
            value={name}
            onChange={e => setName(e.target.value)}
            required/>
            <button className='btn btn-primary ' type="submit">Add Course</button>
        </div>
      </form>
    );
  };

  export default AddCourseForm