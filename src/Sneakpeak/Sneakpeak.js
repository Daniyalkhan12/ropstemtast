import React from "react";
import "./sneakpeak.css";
import charimg1 from "./src/../../Assets/Group100.png";
import charimg2 from "./src/../../Assets/Group103.png";
import charimg3 from "./src/../../Assets/Group106.png";
import charimg4 from "./src/../../Assets/Group101.png";
import charimg5 from "./src/../../Assets/Group104.png";
import charimg6 from "./src/../../Assets/Group102.png";
import charimg7 from "./src/../../Assets/Group105.png";
const Sneakpeak = () => {
  return (
    <div className="bgimg3">
      <h1 className="heading">Sneak Peak</h1>
      <div class="container" style={{ width: "70%" }}>
        <div class="row">
          <div class="col-sm">
            <div className="row" style={{ display: "block" }}>
              <div className="col-sm ">
                <img src={charimg1} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg2} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg3} className="charimg1" />
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="row"
              style={{ display: "block", marginTop: "30px" }}
            >
              <div className="col-sm ">
                <img src={charimg4} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg5} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg4} className="charimg1" />
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div className="row" style={{ display: "block" }}>
              <div className="col-sm ">
                <img src={charimg6} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg7} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg1} className="charimg1" />
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div className="row" style={{ display: "block" }}>
              <div className="col-sm ">
                <img src={charimg1} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg2} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg3} className="charimg1" />
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className="row"
              style={{ display: "block", marginTop: "30px" }}
            >
              <div className="col-sm ">
                <img src={charimg4} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg5} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg4} className="charimg1" />
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div className="row" style={{ display: "block" }}>
              <div className="col-sm ">
                <img src={charimg6} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg7} className="charimg1" />
              </div>
              <div className="col-sm">
                <img src={charimg1} className="charimg1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sneakpeak;
