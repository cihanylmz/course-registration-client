
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';

import LoginForm from "./Components/LoginForm";
import CourseList from './Components/CourseList';
import StudentList from './Components/StudentList';
import AddCourseForm from './Components/AddCourseForm';
import AddStudentForm from './Components/AddStudentForm';
import AddStudentToCourseForm from './Components/AddStudentToCourseForm';
import PermissionProvider from "./PermissionProvider/PermissionProvider";
import Restricted from "./PermissionProvider/Restricted";

function fetchPermission(user) {
  return async function(permission) {
    await new Promise(resolve => setTimeout(resolve, 100));
    //Kullanıcının giriş yaptığı izinlerini alır
    return user.permissions.includes(permission);
  }
}

function App() {
  let [currentUser, setCurrentUser] = useState();
  if (!currentUser) {
    //Login formundan giriş yapıldığında mevcut kullanıcıyı set eder.
    return <LoginForm onLogin={setCurrentUser}/>;
  }
  //Yetki olmayan kısımlarda gösterilecek mesaj ayarlanır.
  const notAllowed = (<div className="container">
        <div className="row">
            <div className="col">
                <h4>Not Allowed </h4>
                You are not allowed to add courses and students.
            </div>
        </div>
    </div>);
  return (
    <PermissionProvider fetchPermission={fetchPermission(currentUser)}>
      
        <div className='container'>
          <h1>Course Registration System</h1>
          <div className='row'>
          <div className='col-6'>
          <h2>Courses</h2>
          <CourseList />
          {/*Sadece belirli yetkiye sahip kullanıcıların girmesini sağlar. */}
          <Restricted to="add.element" fallback={notAllowed}>
            <AddCourseForm />
          </Restricted>
          </div>

          <div className='col-6'>
            <h2>Students</h2>
            <StudentList />
            <Restricted to="add.element" fallback={notAllowed}>
              <AddStudentForm />
            </Restricted>
            <AddStudentToCourseForm />
          </div>

          </div>
        </div>
    </PermissionProvider>
    
    
  )
}

export default App;
