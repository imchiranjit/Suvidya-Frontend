/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import CmsTable from "../Components/CmsTable/CmsTable";

import styles from "./AdminCMS.module.css";

import {
  HiAcademicCap,
  HiBookOpen,
  HiOutlineVideoCamera,
  HiOutlinePencil,
} from "react-icons/hi";

// console.log(styles);
const sidebarTabs = [
  { text: "Universities", icon: <HiOutlinePencil /> },
  { text: "Colleges", icon: <HiAcademicCap /> },
  { text: "Courses", icon: <HiAcademicCap /> },
  { text: "Subjects", icon: <HiBookOpen /> },
  { text: "Videos", icon: <HiOutlineVideoCamera /> },
  { text: "Assignments", icon: <HiOutlinePencil /> },
];

function AdminCMS({ setAuthToken, authToken, loggedIn, setLoggedIn }) {
  const [tab, setTab] = useState("universities");
  const navigate = useNavigate();

  // console.log(loggedIn);

  useEffect(
    function () {
      if (!loggedIn) navigate("/login");
    },
    [loggedIn, navigate]
  );

  async function handleLogout() {
    try {
      await axios.post("http://127.0.0.1:8000/api/v1/logout", null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAuthToken("");
      setLoggedIn(false);
      localStorage.setItem("token", "");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className={styles.container}>
        <Sidebar
          className={styles.sidebar}
          selectTab={tab}
          setSelectTab={setTab}
          tabs={sidebarTabs}
        />
        <NavBar
          isLogo={false}
          className={styles.cms_nav}
          isLogin={loggedIn}
          handleLogout={handleLogout}
        />
        <CmsTable selectTab={tab} authToken={authToken} />
      </div>
    </>
  );
}

export default AdminCMS;
