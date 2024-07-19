import { useEffect } from 'react';
import './TeacherHome.css'
import RecentVideos from './RecentVideos';


export default function TeacherDashboard({selectedTab}){
    var td;
    useEffect(() => {
        const tdEl  = document.getElementById('td')
        td = tdEl
    },[selectedTab])
    function handleAdd(){
        td.classList.add('active-td')
        console.log("StRm")
    }
    function handleClose(){
        td.classList.remove('active-td')
        console.log("StRm")
    }
    
    return (
        <>
        <button className='teacher-add-btn' type='button' onClick={handleAdd} style={{margin: "40px"}}>
        Add {selectedTab.slice(0,-1).toLowerCase()}</button>
            <div className="teacher-dashboard" id='td'>
                <form className='teacher-upload-form'>
                    <h2 className='modal-title'>Upload a {selectedTab.slice(0,-1)}</h2>
                    <i class="uil uil-times modal-close" onClick={handleClose}></i>
                    <div className="programme-select">
                        <label htmlFor="programmes"><h2>Programmes: </h2></label>
                        <select name="Programme" id="programmes">
                            <option value={""}>Select</option>
                            <option value={"Programme1"}>Programme1</option>
                            <option value={"Programme2"}>Programme2</option>
                            <option value={"Programme3"}>Programme3</option>
                            <option value={"Programme4"}>Programme4</option>
                        </select>
                    </div>
                    <div className="course-select">
                        <label htmlFor="courses"><h2>Courses: </h2></label>
                        <select name="Course" id="courses">
                            <option value={""}>Select</option>
                            <option value={"Course1"}>Course1</option>
                            <option value={"Course2"}>Course2</option>
                            <option value={"Course3"}>Course3</option>
                            <option value={"Course4"}>Course4</option>
                        </select>
                    </div>
                    <div className="teacher-upload">
                        <label htmlFor="teacher-video"><h2>Upload a {selectedTab === "Videos" ? "Video Lecture" : "Assignment"}</h2></label>&ensp;
                        <input type="file" accept={selectedTab === "Videos" ? "video/mp4" : ".pdf"} placeholder="Upload a video" id="teacher-video">
                        </input>
                    </div>
                    <div className='teacher-button-div'>
                        <button type='button' className='teacher-upload-button'>Upload</button>
                    </div>
                </form>
            </div>
            {selectedTab === "Videos" && <RecentVideos />}
        </>
    )
}