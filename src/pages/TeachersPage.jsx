import { useState } from "react";
import "./TeachersPage.module.css";
import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";

import {
  //   HiAcademicCap,
  //   HiBookOpen,
  HiOutlineVideoCamera,
  HiOutlinePencil,
} from "react-icons/hi";

function TeachersPage() {
  const [tab, setTab] = useState("");
  const teacherTabs = [
    { text: "Videos", icon: <HiOutlineVideoCamera /> },
    { text: "Assignments", icon: <HiOutlinePencil /> },
    { text: "Notes", icon: <HiOutlinePencil /> },
  ];

  return (
    <>
      <main className="">
        <Sidebar
          tabs={teacherTabs}
          selectTab={tab}
          setSelectTab={setTab}
          logo={false}
        />
        <NavBar />
      </main>
    </>
  );
}

export default TeachersPage;
