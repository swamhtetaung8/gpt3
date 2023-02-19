import React from "react";
import "./feature.css";
const Feature = ({ title, text }) => {
  return (
    <div className="gpt3_features-container_feature">
      <div className="gpt3_features-container_feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3_features-container_feature-text">
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
