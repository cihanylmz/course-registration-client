import React, {useState} from 'react';
import axios from 'axios';

//Yeni bir öğrenci eklemek için kullanılır.
const AddStudentForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('https://course-registration-api.onrender.com/studentAPI/students', { name });
    //Submit edildikten sonra input alanını sıfırlar
    setName('');
  };

  return (
    <form className="form-inline needs-validation" onSubmit={handleSubmit}>
    <div className='input-group'>
        <input
        className='form-control'
        type="text"
        placeholder='Enter student name'
        value={name}
        onChange={e => setName(e.target.value)}
        required />
        <button className='btn btn-primary ' type="submit">Add Student</button>
    </div>
    </form>
  );
};
export default AddStudentForm;