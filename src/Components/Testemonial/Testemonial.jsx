import React from "react";
import "./Testemonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import RightArrow from "../../assets/rightArrow.png";
import LeftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testemonial = () => {
  const [selected, setSelected] = useState(0);
  const testimonialLenght = testimonialsData.length;
  const mytransition = { type: "spring", duration: 3 };

  return (
    <div className="Testimonial" id="testimonial">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>WHAT THEY</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={mytransition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}{" "}
          </span>
          -<span> {testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...mytransition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...mytransition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={mytransition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialLenght - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={LeftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === testimonialLenght - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={RightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testemonial;
