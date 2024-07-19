import { HiOutlinePencil, HiOutlineVideoCamera } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import "./TeacherHome.css";

const tabs = [
    {
        name: "Profile",
        icon: <CgProfile />
    },
    {
        name: "Videos",
        icon: <HiOutlineVideoCamera />
    },
    {
        name: "Assignments",
        icon: <HiOutlinePencil />
    }
]

const name = "Teacher1";



export default function TeacherSidebar({selectedTab, setSelectedTab}){
    return (
        <>
            <div className="ts_wrapper">
                <div className="teacher_sidebar">
                    <h2 className="teacher-hi">{`Hi ${name}`}</h2>
                    <ul className="teacher_sidebar_ul">
                        {
                            tabs.map((tab) => {
                                return (
                                        <TeacherSidebarTab 
                                            btnName = {tab.name}
                                            btnIcon = {tab.icon}
                                            selectedTab = {selectedTab}
                                            setSelectedTab = {setSelectedTab}
                                        />
                                )
                            })
                        }
                    </ul>
                </div>            
            </div>
        </>
    )
}

function TeacherSidebarTab({btnName, btnIcon, selectedTab, setSelectedTab}){
    function handleTabChange(){
        setSelectedTab(btnName)
    }
    return (
        <li className="teacher_sidebar_item">
            <button className={`${"ts_btn"} ${selectedTab === btnName ? "active" : ""}`} onClick={handleTabChange}>
                <div className="ts_btn_each">{btnIcon} &ensp; <span>{btnName}</span></div>
            </button>
        </li>
    )
}