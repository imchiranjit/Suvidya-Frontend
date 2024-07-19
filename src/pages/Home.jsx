import CourseCarousel from "../Components/CourseCarousel/CourseCarousel";
import Faqs from "../Components/Faqs/Faqs";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/NavBar";
import Pricing from "../Components/Pricing/Pricing";
// import LoginForm from "../Components/LoginForm/LoginForm";
// import { useState } from "react";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <CourseCarousel
        heading={"Explore by Course"}
        isImgHeading={true}
        isVideoTitle={false}
        isBrowseAll={false}
        data={1}
        scaleUp={true}
        overflow={true}
      />
      <CourseCarousel
        heading={"Trending Courses"}
        isImgHeading={false}
        isVideoTitle={true}
        isBrowseAll={true}
        overflow={false}
        scaleUp={false}
        data={2}
      />
      <CourseCarousel
        heading={"Latest Courses"}
        isImgHeading={false}
        isVideoTitle={true}
        isBrowseAll={true}
        scaleUp={false}
        data={3}
        overflow={false}
      />
      <Pricing />

      <Faqs />

      <Footer />
    </div>
  );
}

export default Home;
