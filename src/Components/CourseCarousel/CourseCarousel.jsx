/* eslint-disable react/prop-types */

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./CourseCarouselStyle.css";

// temporary
// const carouselData1 = [
//   {
//     imgHeading: "Savana",
//     numberOfLectures: "8",

//     link: "",
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/62467a612893e736551793e7_savanna-documentary-category-streaming-x-webflow-template.jpg",
//   },
//   {
//     numberOfLectures: "11",
//     imgHeading: "Sea",
//     link: "",
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/62467a51fcc3b0a442e3e270_sea-documentary-category-streaming-x-webflow-template.jpg",
//   },
//   {
//     numberOfLectures: "12",
//     imgHeading: "Forest",
//     link: "",
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/62467a3e49a56e35cf5373f7_forest-documentary-category-streaming-x-webflow-template.jpg",
//   },
//   {
//     numberOfLectures: "3",
//     imgHeading: "Jungle",
//     link: "",
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/62467a2e5a238a438061fa52_jungle-documentary-category-streaming-x-webflow-template.jpg",
//   },

//   {
//     numberOfLectures: "5",
//     imgHeading: "Desert",
//     link: "",
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/62467a2074f301ec84cebd49_desert-documentary-category-streaming-x-webflow-template.jpg",
//   },
//   {
//     numberOfLectures: "2",
//     imgHeading: "Arctic",
//     link: "",
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/62467a11bb4170eb4a75e9b4_artic-documentary-category-streaming-x-webflow-template.jpg",
//   },
// ];

// const carouselData2 = [
//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bccf817ac19446414e8e3_the-king-of-the-jungle-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The King of the Jungle",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcc73d191fe7bc7056397_frogs-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "Frogs: The jungle's heart",
//     year: "2019",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcadd7efa008cf0b6435d_the-elephant-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The Heart of the Elephant",
//     year: "2018",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bccf817ac19446414e8e3_the-king-of-the-jungle-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The return of the white Rhino",
//     year: "2022",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcc73d191fe7bc7056397_frogs-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "Stringray: The Sea's Heart",
//     year: "2023",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bc926b737821153040706_stingray-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The Squirel dilema",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bc6f285f681d5b72bc217_the-squirrel-dilemma-streaming-x-webflow-template-thumbnail.jpg",
//     link: "",
//     title: "",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcadd7efa008cf0b6435d_the-elephant-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bca75f38cddf68d2a45c6_white-rhino-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "",
//     year: "2020",
//     time: "1h 5min",
//   },
// ];
// const carouselData3 = [
//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcc73d191fe7bc7056397_frogs-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "Stringray: The Sea's Heart",
//     year: "2023",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bc926b737821153040706_stingray-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The Squirel dilema",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bc6f285f681d5b72bc217_the-squirrel-dilemma-streaming-x-webflow-template-thumbnail.jpg",
//     link: "",
//     title: "",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcadd7efa008cf0b6435d_the-elephant-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bca75f38cddf68d2a45c6_white-rhino-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "",
//     year: "2020",
//     time: "1h 5min",
//   },
//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bccf817ac19446414e8e3_the-king-of-the-jungle-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The King of the Jungle",
//     year: "2020",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcc73d191fe7bc7056397_frogs-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "Frogs: The jungle's heart",
//     year: "2019",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bcadd7efa008cf0b6435d_the-elephant-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The Heart of the Elephant",
//     year: "2018",
//     time: "1h 5min",
//   },

//   {
//     img: "https://assets-global.website-files.com/62393a78af908f2cd70c82ed/624bccf817ac19446414e8e3_the-king-of-the-jungle-streaming-x-webflow-template.jpg",
//     link: "",
//     title: "The return of the white Rhino",
//     year: "2022",
//     time: "1h 5min",
//   },
// ];

const carouselData1 = [
  {
    imgHeading: "Savana",
    numberOfLectures: "8",

    link: "/",
    img: "/images/courses/img1.jpg",
  },
  {
    numberOfLectures: "11",
    imgHeading: "Sea",
    link: "/",
    img: "/images/courses/img2.jpg",
  },
  {
    numberOfLectures: "12",
    imgHeading: "Forest",
    link: "/",
    img: "/images/courses/img3.jpg",
  },
  {
    numberOfLectures: "3",
    imgHeading: "Jungle",
    link: "/",
    img: "/images/courses/img4.jpg",
  },

  {
    numberOfLectures: "5",
    imgHeading: "Desert",
    link: "/",
    img: "/images/courses/img5.jpg",
  },
  {
    numberOfLectures: "2",
    imgHeading: "Arctic",
    link: "/",
    img: "/images/courses/img6.jpg",
  },
];

const carouselData2 = [
  {
    link: "/",
    img: "/images/courses/img7.jpg",
    title: "The King of the Jungle",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img8.jpg",
    title: "Frogs: The jungle's heart",
    year: "2019",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img9.jpg",
    title: "The Heart of the Elephant",
    year: "2018",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img10.jpg",
    title: "The return of the white Rhino",
    year: "2022",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img11.jpg",
    title: "Stringray: The Sea's Heart",
    year: "2023",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img12.jpg",
    title: "The Squirel dilema",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img13.jpg",
    title: "Bio-Research",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img14.jpg",
    title: "Vaccination",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img1.jpg",
    title: "Data Analysis",
    year: "2020",
    time: "1h 5min",
  },
];
const carouselData3 = [
  {
    link: "/",
    img: "/images/courses/img14.jpg",
    title: "Stringray: The Sea's Heart",
    year: "2023",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img13.jpg",
    title: "The Squirel dilema",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img12.jpg",
    title: "Bioinformatics",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img11.jpg",
    title: "Space Science",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img10.jpg",
    title: "Data Analysis and Visualization",
    year: "2020",
    time: "1h 5min",
  },
  {
    link: "/",
    img: "/images/courses/img9.jpg",
    title: "The King of the Jungle",
    year: "2020",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img8.jpg",
    title: "Frogs: The jungle's heart",
    year: "2019",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img7.jpg",
    title: "The Heart of the Elephant",
    year: "2018",
    time: "1h 5min",
  },

  {
    link: "/",
    img: "/images/courses/img6.jpg",
    title: "The return of the white Rhino",
    year: "2022",
    time: "1h 5min",
  },
];

function CourseCarousel({
  heading,
  isImgHeading,
  isVideoTitle,
  isBrowseAll = false,
  data,
  scaleUp = true,
  overflow = true,
}) {
  useEffect(function () {
    Aos.init();
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  // temprory
  const dataLen =
    data === 1
      ? carouselData1.length
      : data === 2
      ? carouselData2.length
      : carouselData3.length;

  const end = Math.ceil(dataLen / 3);

  function updateState(ind) {
    if (ind < 0) return;
    else if (ind >= end) {
      setActiveIndex(0);
    } else {
      setActiveIndex(ind);
    }
  }

  return (
    <div
      className="course-car--box"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="2000"
    >
      <div className="container-default w-container">
        <div className="heading-box">
          <h2 className="heading">{heading}</h2>
          {isBrowseAll && (
            <a href="/" className="link-line-wrapper w-inline-block">
              Browse all
              <div className="link-line style-AbJlq" id="style-AbJlq"></div>
            </a>
          )}
        </div>
        <div className="slider-wrapper w-slider">
          <div className="slider-mask w-slider-mask" id="w-slider-mask-0">
            <div className="slide-item-mg w-slide">
              <div className="w-dyn-list">
                <div
                  className={`list slider w-dyn-items`}
                  style={{
                    transform: `translate(-${activeIndex * 100}%)`,
                  }}
                >
                  {data === 1
                    ? carouselData1.map((item, i) => (
                        <ListItem
                          key={i}
                          isImgHeading={isImgHeading}
                          isVideoTitle={isVideoTitle}
                          imgHeading={item.imgHeading}
                          noOfLectures={item.numberOfLectures}
                          img={item.img}
                          link={item.link}
                          onHover={scaleUp}
                          overflow={overflow}
                        />
                      ))
                    : data === 2
                    ? carouselData2.map((item, i) => (
                        <ListItem
                          key={i}
                          isImgHeading={isImgHeading}
                          isVideoTitle={isVideoTitle}
                          imgHeading={item.imgHeading}
                          noOfLectures={item.numberOfLectures}
                          img={item.img}
                          link={item.link}
                          title={item.title}
                          year={item.year}
                          time={item.time}
                          onHover={scaleUp}
                          overflow={overflow}
                        />
                      ))
                    : carouselData3.map((item, i) => (
                        <ListItem
                          key={i}
                          isImgHeading={isImgHeading}
                          isVideoTitle={isVideoTitle}
                          imgHeading={item.imgHeading}
                          noOfLectures={item.numberOfLectures}
                          img={item.img}
                          link={item.link}
                          title={item.title}
                          year={item.year}
                          time={item.time}
                          onHover={scaleUp}
                          overflow={overflow}
                        />
                      ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => updateState(activeIndex - 1)}
            className="btn-circle-secondary  slider-arrow-left"
          >
            <div className="line-rounded-icon">
              <IoArrowBack />
            </div>
          </button>
          <button
            onClick={() => updateState(activeIndex + 1)}
            className="btn-circle-secondary slider-arrow-right"
          >
            <div className="line-rounded-icon">
              <IoArrowForward />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  isImgHeading,
  isVideoTitle,
  imgHeading,
  img,
  link,
  title = "",
  year = "",
  time = "",
  onHover,
  overflow,
}) {
  return (
    <div className={`list-item w-dyn-item`}>
      <a
        href={link}
        className={`documentary-category-card  w-inline-block ${
          onHover ? "" : "scaleDown"
        }`}
      >
        <div className={`documentary-card-content large`}>
          {isImgHeading && (
            <>
              <div className="mg-bottom-16px">
                <h3 className="display-3 ">{imgHeading}</h3>
              </div>

              {/* <div className="text-200 medium text-uppercase">
                <div className="flex-horizontal start">
                  <div className="mg-right-4px">{noOfLectures}</div>
                  <div>
                    {noOfLectures > 0 && noOfLectures === 1
                      ? "Documentary"
                      : "Documentries"}
                  </div>
                </div>
              </div> */}
            </>
          )}
        </div>
        {/* <div className="documentary-category-gradient"></div> */}
        <div className={`list-item-img ${overflow ? "" : "overflow-hidden"}`}>
          <img src={img} alt="Forest" className="documentary-category-image" />
        </div>
        {isVideoTitle && (
          <div className="video-titlebox">
            <h3 className="heading-h5-size mg-bottom-4px">{title}</h3>
            <div className="flex-horizontal start">
              <div className="text-200 medium color-neutral-400">{year}</div>
              <div className="divider-details"></div>
              <div className="text-200 medium color-neutral-400">{time}</div>
            </div>
          </div>
        )}
      </a>
    </div>
  );
}

export default CourseCarousel;

{
  /*  For tablet or mobile
  
  <div className="hidden-on-desktop w-slider-nav w-round">
              <div
                className="w-slider-dot w-active style-Y7sxa"
                data-wf-ignore=""
                aria-label="Show slide 1 of 2"
                aria-pressed="true"
                role="button"
                id="style-Y7sxa"
              ></div>
              <div
                className="w-slider-dot style-mS3sl"
                data-wf-ignore=""
                aria-label="Show slide 2 of 2"
                aria-pressed="false"
                role="button"
                id="style-mS3sl"
              ></div>
            </div> */
}
