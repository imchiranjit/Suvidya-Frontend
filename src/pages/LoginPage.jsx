/* eslint-disable react/prop-types */
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import LoginForm from "../Components/LoginForm/LoginForm";
// import {  } from "react";

function LoginPage({
  setAuthToken,
  studentLoggedIn,
  teacherLoggedIn,
  adminLoggedIn,
  setStudentLoggedIn,
  setAdminLoggedIn,
  setTeacherLoggedIn,
}) {
  return (
    <div>
      <NavBar isLogo={true} isLogin={false} />

      <LoginForm
        setAuthToken={setAuthToken}
        adminLoggedIn={adminLoggedIn}
        studentLoggedIn={studentLoggedIn}
        teacherLoggedIn={teacherLoggedIn}
        setStudentLoggedIn={setStudentLoggedIn}
        setAdminLoggedIn={setAdminLoggedIn}
        setTeacherLoggedIn={setTeacherLoggedIn}
      />

      <Footer />
    </div>
  );
}

export default LoginPage;
