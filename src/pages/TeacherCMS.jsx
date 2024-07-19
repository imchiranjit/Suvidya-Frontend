import NavBar from "../Components/NavBar/NavBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import CmsTable from "../Components/CmsTable/CmsTable";
import styles from "./TeacherCMS.module.css";
import { useState } from "react";

// console.log(styles);

function TeacherCMS() {
  const [tab, setTab] = useState("");
  return (
    <>
      <div className={styles.container}>
        <Sidebar
          className={styles.sidebar}
          selectTab={tab}
          setSelectTab={setTab}
        />
        <NavBar isLogo={false} className={styles.cms_nav} isLogin={true} />
        <CmsTable selectTab={tab} />
      </div>
    </>
  );
}

export default TeacherCMS;
