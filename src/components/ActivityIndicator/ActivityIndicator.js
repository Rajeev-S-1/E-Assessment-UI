import React from "react";
import "./activityIndicator.css";
import {
  ThreeDots,
} from "react-loading-icons";

const ActivityIndicator = () => {
  return (
    <div className="flex items-center justify-center backdrop ">
      <ThreeDots />
    </div>
  );
};

export default ActivityIndicator;
