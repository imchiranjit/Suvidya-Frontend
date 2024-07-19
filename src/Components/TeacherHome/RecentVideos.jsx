import logo from "./DY.jpeg";

export default function RecentVideos(){
    return (
        <>
            <div className="recent-videos">
                <h2>Recent Videos</h2>
                <div className="flex flex-row" style={{display:"flex"}}>
                    <div className="recent-video">
                        <div className="recent-video-thumbnail">
                            <img src={logo} width={"100px"} alt="Video Thumbnail" />
                        </div>
                        <div className="recent-video-info">
                            <h3>Video Title</h3>
                            <p>Video Description</p>
                        </div>
                    </div>
                    <div className="recent-video">
                        <div className="recent-video-thumbnail">
                            <img src={logo} width={"100px"} alt="Video Thumbnail" />
                        </div>
                        <div className="recent-video-info">
                            <h3>Video Title</h3>
                            <p>Video Description</p>
                        </div>
                    </div>
                    <div className="recent-video">
                        <div className="recent-video-thumbnail">
                            <img src={logo} width={"100px"} alt="Video Thumbnail" />
                        </div>
                        <div className="recent-video-info">
                            <h3>Video Title</h3>
                            <p>Video Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}