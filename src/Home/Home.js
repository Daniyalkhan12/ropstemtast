import React from "react";
import "./home.css";
import logoimg from "./src/../../Assets/logo.svg";
import charimg1 from "./src/../../Assets/Group100.png";
import charimg2 from "./src/../../Assets/Group103.png";
import charimg3 from "./src/../../Assets/Group106.png";
import charimg4 from "./src/../../Assets/Group101.png";
import charimg5 from "./src/../../Assets/Group104.png";
import charimg6 from "./src/../../Assets/Group102.png";
import charimg7 from "./src/../../Assets/Group105.png";

const Home = () => {
  return (
    <div className="bgimage">
      <div class="container ">
        <div className="row">
          <div className="col-2">
            <img className="logoimg" src={logoimg} />
          </div>
          <div className="col-10">
            <ul className="navbar">
              <li>Home</li>
              <li>About US</li>
              <li>Road Map</li>
              <li>Team</li>
              <li>Wallet Collection</li>
              <li>Minting</li>
              <li>
                <button className="contactus">Contact Us</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-3 col-7 mainheading">
            777 Clubhouse Founders Collection
            <p className="secheading">Elevate your lifestyle</p>
            <button className="connectwalbtn">Connect Wallet</button>
          </div>
          <div className="col-3 col-5">
            <div className="row">
              <div className="col-3" style={{ margin: "10px" }}>
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
              <div className="col-3" style={{ marginTop: "30px" }}>
                <div className="row" style={{ display: "block" }}>
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
              <div className="col-3" style={{ margin: "10px" }}>
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
      </div>
    </div>
  );
};

export default Home;
