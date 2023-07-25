import React from "react";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import HeroImg from "../../assets/hero_image.png";
import HeroImgBackgrund from "../../assets/hero_image_back.png";
import Callries from "../../assets/calories.png";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const mytransition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="hero-left">
        {/*Hero Header*/}
        <Header />
        <div className="blur hero-blur"></div>

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "180px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...mytransition, type: "tween" }}
          ></motion.div>
          <span>the best fitnes club in ther town</span>
        </div>

        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span className="small-text">
              In here we will help you to shape and buil your iedal body and
              leave up your life to fullest
            </span>
          </div>
        </div>

        {/*Hero firgures*/}
        <div className="hero-figures">
          <div>
            <span>
              <NumberCounter
                start={100}
                end={150}
                delay={4}
                className="increment"
                preFix="+"
              />
            </span>
            <span>Expert choices</span>
          </div>
          <div>
            <span>
              <NumberCounter
                start={100}
                end={140}
                delay={4}
                className="increment"
                preFix="+"
              />
            </span>
            <span>Members join</span>
          </div>
          <div>
            <span>
              <NumberCounter
                start={80}
                end={120}
                delay={4}
                className="increment"
                preFix="+"
              />
            </span>
            <span>fitnes progress</span>
          </div>
        </div>
        {/*Hero buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>
      <div className="hero-right">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...mytransition, type: "tween" }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>124 bpm</span>
        </motion.div>
        <img src={HeroImg} alt="hero image" className="hero-image" />
        <motion.img
          src={HeroImgBackgrund}
          alt="hero background image "
          className="hero-back-image"
          initial={{ right: "25rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ ...mytransition, type: "tween" }}
        />
        <motion.div
          className="calories"
          initial={{ right: "40rem" }}
          whileInView={{ right: "32rem" }}
          transition={{ ...mytransition, type: "tween" }}
        >
          <img src={Callries} alt="Callries" />
          <div>
            <span>Calories Burned</span>
            <span>120 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
