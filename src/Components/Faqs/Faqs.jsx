/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./FaqsStyle.css";
import { IoAddSharp } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How do I set up my Streaming X account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    question: "If I buy a plan, do I have access to all the content?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    question: "Can I cancel my membership at any time?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    question: "Do you support multiple devices?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
];

function Faqs() {
  useEffect(function () {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1500"
      style={{ marginBottom: "32rem" }}
    >
      <div className="container-default w-container snipcss-vnY9e">
        <div className="inner-container _600px center style-i4Cvm">
          <div className="text-center mg-bottom-48px">
            <h2 className="color-neutral-500 ">Frequently Asked Questions</h2>
            <div className="faqs-txt-box">
              <p className="color-neutral-500 ">
                Mostly Asked Questions are placed here. Check them out before
                reaching. We hope you got your answer in them.
              </p>
            </div>
          </div>
        </div>
        <div className="inner-container _955px center style-lJz5d">
          <div className="w-layout-grid grid-1-column gap-row-24px">
            {faqs.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => setIsActive((c) => !c)}
      className={`${isActive ? "item-active" : ""} accordion-item-wrapper faq`}
    >
      <div className="accordion-content-wrapper width-660px">
        <div className="accordion-header">
          <h3 className="question">{question}</h3>
        </div>
        <div
          className={`${isActive ? "faq-visible" : "hidden"} acordion-body `}
        >
          <div className="accordion-spacer"></div>
          <p className={`answer  mg-bottom-0 `}>{answer}</p>
        </div>
      </div>
      <div className={`accordion-side right-side`}>
        <button
          className={`${
            isActive ? "faq-active" : ""
          } btn-circle-secondary small accordion-btn w-inline-block`}
        >
          <IoAddSharp style={{ fontWeight: "700", fontSize: "2.8rem" }} />
        </button>
      </div>
    </div>
  );
}
export default Faqs;
