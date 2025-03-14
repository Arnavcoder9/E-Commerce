import React from "react";
import "./breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} />{" "}
      {product.category} <img src={arrow_icon} /> {product.name}
    </div>
  );
};
