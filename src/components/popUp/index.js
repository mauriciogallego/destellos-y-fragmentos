import React from "react";
import PropTypes from "prop-types";
import "./popUp.css";

function PopUp({ img, voidImg }) {
  const height = window.innerHeight;
  return (
    <div onClick={voidImg} style={{ height }} className="conteiner">
      <img src={img} alt="img popUp" />
    </div>
  );
}

PopUp.propTypes = {};

export default PopUp;
