/* eslint-disable react/prop-types */
// import { useForm } from "react-hook-form";
import "./LoginFormStyle.css";
// import { HiOutlineLockClosed } from "react-icons/hi";
// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import TeacherLoginForm from "./TeacherLoginForm";
import AdminLoginForm from "./AdminLoginForm";
import StudentLoginForm from "./StudentLoginForm";

// const students = [
//   {
//     email: "test1@gmail.com",
//     password: "test1",
//   },
//   {
//     email: "test2@gmail.com",
//     password: "test2",
//   },
// ];
// const teachers = [
//   {
//     email: "teacher1@gmail.com",
//     password: "test1",
//   },
//   {
//     email: "teacher2@gmail.com",
//     password: "test2",
//   },
// ];

function LoginForm({
  setAuthToken,
  studentLoggedIn,
  teacherLoggedIn,
  adminLoggedIn,
  setStudentLoggedIn,
  setAdminLoggedIn,
  setTeacherLoggedIn,
}) {
  const [userType, setUserType] = useState("student");

  return (
    <>
      <div className="form-container">
        <div className="form-box">
          <form>
            <div className="select-user">
              <img
                src="/images/student-icon.png"
                alt="student icon"
                className="user-icon"
              />

              <input
                type="radio"
                id="student"
                name="user"
                value={userType}
                checked={userType === "student"}
                onChange={() => setUserType("student")}
              />
              <label htmlFor="student">Student</label>
            </div>
            <div className="select-user">
              <img
                src="/images/teacher-icon.png"
                alt="teacher icon"
                className="user-icon"
              />
              <input
                type="radio"
                id="teacher"
                name="user"
                value={userType}
                checked={userType === "teacher"}
                onChange={() => setUserType("teacher")}
              />
              <label htmlFor="teacher">Teacher</label>
            </div>
            <div className="select-user">
              <img
                src="/images/teacher-icon.png"
                alt="admin icon"
                className="user-icon"
              />
              <input
                type="radio"
                id="admin"
                name="user"
                value={userType}
                checked={userType === "admin"}
                onChange={() => setUserType("admin")}
              />
              <label htmlFor="admin">Admin</label>
            </div>
          </form>
        </div>
        {userType === "student" && (
          <StudentLoginForm
            setAuthToken={setAuthToken}
            loggedIn={studentLoggedIn}
            setLoggedIn={setStudentLoggedIn}
          />
        )}
        {userType === "teacher" && (
          <TeacherLoginForm
            setAuthToken={setAuthToken}
            loggedIn={teacherLoggedIn}
            setLoggedIn={setTeacherLoggedIn}
          />
        )}
        {userType === "admin" && (
          <AdminLoginForm
            setLoggedIn={setAdminLoggedIn}
            setAuthToken={setAuthToken}
            loggedIn={adminLoggedIn}
          />
        )}
      </div>
      <div className="overlay hidden"></div>
    </>
  );
}

export default LoginForm;
