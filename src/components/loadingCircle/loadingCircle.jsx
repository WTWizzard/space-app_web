import React from "react";
import './loading-circle.css'

const LoadingCircle = () => {
  return (
    <div className="loading-circle">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingCircle;
