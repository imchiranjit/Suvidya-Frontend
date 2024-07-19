import { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import TeacherDashboard from "../Components/TeacherHome/TeacherDashboard";
import TeacherSidebar from "../Components/TeacherHome/TeacherSidebar";

export default function TeacherHome(){
    const [selectedTab, setSelectedTab] = useState("");
    return (
        <>
            <div className="teacher-nav">
                <NavBar />
            </div>
            <div className="teacher-window">
                <TeacherSidebar selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
                <div style={{position:"relative",marginTop:"80px"}}>
                    <TeacherDashboard selectedTab={selectedTab}/>
                </div>
            </div>
            
        </>
    )
}