/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import styles from "./Lectures.module.css";

const lectures = [
  {
    id: "EaG3Zd04W5s?si=EAFDwV5_qIt5ZdKj",
    title: "React Basics",
  },
  {
    id: "--VcGI9iPvw?si=Egx5L2Ygn_FVysRo",
    title: "React Basics",
  },
  {
    id: "EaG3Zd04W5s?si=EAFDwV5_qIt5ZdKj",
    title: "React Basics",
  },
  {
    id: "--VcGI9iPvw?si=Egx5L2Ygn_FVysRo",
    title: "React Basics",
  },
  {
    id: "EaG3Zd04W5s?si=EAFDwV5_qIt5ZdKj",
    title: "React Basics",
  },
  {
    id: "--VcGI9iPvw?si=Egx5L2Ygn_FVysRo",
    title: "React Basics",
  },
];

function Lectures() {
  return (
    <div className={styles.lectures_box}>
      {lectures.map((lec) => (
        <Lecture embdId={lec.id} title={lec.title} key={lec.id} />
      ))}
    </div>
  );
}

function Lecture({ embdId, title }) {
  return (
    <div className={styles.lecture_box}>
      <div className={styles.video_box}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${embdId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className={styles.video}
        ></iframe>
      </div>
      <div className={styles.video_title}>{title}</div>
    </div>
  );
}

export default Lectures;
