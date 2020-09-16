import React from "react";
import Loading from "react-loading";
import './loading.css'
export default function LoadSpin() {
  return (
    <div className="containerLoading" style={{height: window.innerHeight}}>
      <Loading type={"spin"} />
    </div>
  );
}
