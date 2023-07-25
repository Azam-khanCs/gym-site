import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export const Program = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span>our Programs</span>
        <span className="stroke-text">to shop you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => {
          return (
            <React.Fragment>
              <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                  <span>Join Now</span>
                  <span>
                    <img src={RightArrow} alt="arrow" />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
