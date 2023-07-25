import React from "react";
import "./PricingPlan.css";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";

const PricingPlan = () => {
  return (
    <div className="PricingPlans" id="pricingplans">
      <div className="blur  plans-blur-1"></div>
      <div className="blur  plans-blur-2"></div>
      <div className="blur plans-bulr-2"></div>
      <div className="pricing-header">
        <span className="stroke-text">READY TO START </span>
        <span> YOUR JOURNEY </span>
        <span className="stroke-text">NOW WITHUS </span>
      </div>
      <div className="plans">
        {plansData.map((plan, index) => {
          return (
            <div className="plan" key={index}>
              {plan.icon}
              <span>{plan.name}</span>
              <span> $ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, index) => {
                  return (
                    <div className="feature">
                      <span>
                        <img src={WhiteTick} alt="" />
                      </span>
                      <span key={index}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>see more beneifite -></span>
              </div>
              <button>Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlan;
