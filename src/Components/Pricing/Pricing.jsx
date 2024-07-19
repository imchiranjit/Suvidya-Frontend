import "./PricingStyle.css";

import { IoCheckmarkOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Pricing() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
      <div className="section position-relative cta-primary snipcss-FkNii">
        <div className="container-default w-container">
          <div className="w-layout-grid grid-2-columns text-left-default">
            <div>
              <h2 className="pricing-heading">
                Enjoy your favorite documentaries for $9.99
              </h2>
              <p className="pricing-text mg-bottom-24px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit quam
                tellus habitant vel elit donec euismod in.
              </p>
              <div className="w-layout-grid grid-1-column gap-row-16px mg-bottom-40px">
                <div className="pricing-text icon-list-item-wrapper ">
                  <div className="line-rounded-icon icon-list">
                    <IoCheckmarkOutline />
                  </div>
                  <div className="text-200 list">
                    More than 1,500 documentaries
                  </div>
                </div>
                <div className="pricing-text icon-list-item-wrapper ">
                  <div className="line-rounded-icon icon-list">
                    <IoCheckmarkOutline />
                  </div>
                  <div className="text-200 list">New content every week</div>
                </div>
                <div className="pricing-text icon-list-item-wrapper ">
                  <div className="line-rounded-icon icon-list">
                    <IoCheckmarkOutline />
                  </div>
                  <div className="text-200 list">Content in 4K and 8K</div>
                </div>
              </div>
              <div className="buttons-row">
                <a
                  href="/pricing"
                  className="btn btn-primary button-row w-button"
                >
                  Subscribe today!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="476224c3-7fd7-836f-738c-ccafb3a1f62e"
          className="half-bg-image-right cta-primary style-U2OoD"
          id="style-U2OoD"
        ></div>
      </div>
    </div>
  );
}

export default Pricing;
