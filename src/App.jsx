import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Subscribe from "./pages/Subscribe";
import SignUp from "./pages/SignUp";
import LecturesPage from "./pages/LecturesPage";
import TeachersPage from "./pages/TeachersPage";
import AdminCMS from "./pages/AdminCMS";
import TeacherCMS from "./pages/TeacherCMS";
import TeacherHome from "./pages/TeacherHome";
// import NavBar from "./Components/NavBar";

function App() {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("token")
  );
  const [adminLoggedIn, setAdminLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("token"))
  );
  const [teacherLoggedIn, setTeacherLoggedIn] = useState(false);
  const [studentLoggedIn, setStudentLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <LoginPage
                setAuthToken={setAuthToken}
                adminLoggedIn={adminLoggedIn}
                studentLoggedIn={studentLoggedIn}
                teacherLoggedIn={teacherLoggedIn}
                setStudentLoggedIn={setStudentLoggedIn}
                setAdminLoggedIn={setAdminLoggedIn}
                setTeacherLoggedIn={setTeacherLoggedIn}
              />
            }
          />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/lectures" element={<LecturesPage />} />
          <Route
            path="/cms"
            element={
              <AdminCMS
                authToken={authToken}
                setAuthToken={setAuthToken}
                loggedIn={adminLoggedIn}
                setLoggedIn={setAdminLoggedIn}
              />
            }
          />
          <Route path="/teacher" element={<TeachersPage />} />
          <Route path="/cms" element={<TeacherCMS />} />
          <Route path="/teacherhome" element={<TeacherHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
