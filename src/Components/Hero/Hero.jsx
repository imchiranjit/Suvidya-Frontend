/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./HeroStyle.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const heroCarData1 = [
  {
    link: "https://streamingtemplates.webflow.io/director/john-carter",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b4321fa4b9120be9c167_film-director-sales-streaming-x-webflow-template.png",
  },
  {
    link: "https://streamingtemplates.webflow.io/documentary/the-king-of-the-jungle",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b43292aa033e743645ef_documentary-single-sales-streaming-x-webflow-template.png",
  },
  {
    link: "https://streamingtemplates.webflow.io/director/john-carter",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b4323b339237bbfdf65b_home-sales-streaming-x-webflow-template.png",
  },
  {
    link: "https://streamingtemplates.webflow.io/director/john-carter",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b432c1a8042696ec3a2a_pricing-single-sales-streaming-x-webflow-template.png",
  },
  {
    link: "https://streamingtemplates.webflow.io/director/john-carter",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b4336bf4e70d7ee067b3_home-v2-sales-streaming-x-webflow-template.png",
  },
  {
    link: "https://streamingtemplates.webflow.io/director/john-carter",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b433c1a8044d00ec3a34_categories-sales-streaming-x-webflow-template.png",
  },
  {
    link: "https://streamingtemplates.webflow.io/director/john-carter",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b433c1a8044d00ec3a34_categories-sales-streaming-x-webflow-template.png",
  },
  {
    link: "https://streamingtemplates.webflow.io/director/john-carter",
    img: "https://assets-global.website-files.com/62393a78af908f62ca0c82c0/6333b433c1a8044d00ec3a34_categories-sales-streaming-x-webflow-template.png",
  },
];
const heroCarData2 = [
  { link: "/", img: "/images/courses/img1.jpg" },
  { link: "/", img: "/images/courses/img2.jpg" },
  { link: "/", img: "/images/courses/img3.jpg" },
  { link: "/", img: "/images/courses/img4.jpg" },
  { link: "/", img: "/images/courses/img5.jpg" },
  { link: "/", img: "/images/courses/img6.jpg" },
  { link: "/", img: "/images/courses/img7.jpg" },
  { link: "/", img: "/images/courses/img8.jpg" },
  { link: "/", img: "/images/courses/img9.jpg" },
  { link: "/", img: "/images/courses/img10.jpg" },
  { link: "/", img: "/images/courses/img11.jpg" },
  { link: "/", img: "/images/courses/img12.jpg" },
  { link: "/", img: "/images/courses/img13.jpg" },
  { link: "/", img: "/images/courses/img14.jpg" },
  { link: "/", img: "/images/courses/img14.jpg" },
  { link: "/", img: "/images/courses/img14.jpg" },
];

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-heading color-neutral-500">
            Suvidya
            <span
              style={{
                fontWeight: "500",
              }}
            >
              &minus;
            </span>
            Make The Change
          </h1>
          <p className="hero-text color-neutral-500">
            Presenting Streaming X, the ultimate Streaming Membership Webflow
            Template.
          </p>
          <div className="buttons-row center">
            <Link
              to="/lectures"
              className="btn btn-primary button-row"
              style={{ padding: "2rem 3.2rem", fontSize: "1.6rem" }}
            >
              Explore Content
            </Link>
            <Link
              to="/"
              className="btn btn-secondary"
              style={{ padding: "1.8rem 3.2rem", fontSize: "1.6rem" }}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
      <CarouselScroll />
    </>
  );
}

function CarouselScroll() {
  const [move, setMove] = useState(0);
  const scrollAmount = 0.15;
  const scrollLimit = 25;

  useEffect(function () {
    Aos.init();
  }, []);

  window.onscroll = function () {
    if (this.oldScroll > this.scrollY) {
      // upward
      setMove((cur) => {
        if (cur < scrollLimit) return cur + scrollAmount;
        else return cur - scrollAmount;
      });
    } else {
      // downward
      setMove((cur) => {
        if (cur > -1 * scrollLimit) return cur - scrollAmount;
        else return cur + scrollAmount;
      });
    }
    this.oldScroll = this.scrollY;
  };

  // const images = document.getElementsByTagName("img");
  // const carBoxes = document.querySelectorAll(".car-box");
  // const imgArr = [...images];
  // if (imgArr.length) {
  //   const isLoaded = imgArr.every((img) => (img.onload = () => true));
  //   if (isLoaded) {
  //     carBoxes.forEach((box) => (box.style.transform = "translate3d(0,0,0)"));
  //   }
  // }

  return (
    <div
      className="hero-carousel"
      data-aos="fade-up-left"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <Carousel position={"top"} move={move} />
      <Carousel position={"bottom"} move={move} />
    </div>
  );
}

function Carousel({ position, move }) {
  return (
    <div className="car-box">
      <div
        className={`home-pages-${position}-wrapper carousel`}
        style={{
          transform: `translate3d(${
            position === "top" ? -1 * move : move
          }%, 0, 0)`,
        }}
      >
        {heroCarData2.map((item, i) => (
          <CarouselItem link={item.link} img={item.img} key={i} />
        ))}
      </div>
    </div>
  );
}

function CarouselItem({ link, img }) {
  return (
    <a href={link} className="image-home-link-wrapper ">
      <img src={img} alt="" className="image-home-link" />
    </a>
  );
}

export default Hero;
