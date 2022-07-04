import React from "react";
import "./team.css";
import charimg8 from "./src/../../Assets/Group180.png";
import charimg9 from "./src/../../Assets/Group181.png";
import instaicon from "./src/../../Assets/Group81.png";
import twittericon from "./src/../../Assets/Group82.png";
const Team = () => {
  return (
    <div className="bgimgteam">
      <h1 className="teamheading">Meet Our Founding Team</h1>
      <div class="container" style={{ padding: "5rem" }}>
        <div class="col-sm">
          <div class="row" style={{ marginBottom: "3rem" }}>
            <div class="col-3">
              <img className="charimg8" src={charimg8} />
            </div>
            <div class="col-6">
              <p className="teamintro">
                10+ years of experience in the hospitality/entertainment
                industry The latest venture is currently in Ycombinator’s Winter
                ‘22 Class BA in Finance, loves to stay fit, travel, & live life
                to the fullest.
              </p>
              <img className="socialicon" src={instaicon} />
              <img className="socialicon" src={twittericon} />
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="row">
            <div class="col-9">
              <p className="teamintro1">
                Hospitality Tech Founder + Crypto/Web3 Investor Holder of BAYC,
                MAYC, Meebits, & more Avid golfer
              </p>
              <img className="socialicon" src={instaicon} />
              <img className="socialicon" src={twittericon} />
            </div>
            <div class="col-3">
              <img className="charimg8" src={charimg9} />
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="row">
            <div class="col-3">
              <img className="charimg8" src={charimg8} />
            </div>
            <div class="col-6">
              <p className="teamintro">
                https://www.artstation.com/vaxopipia
                <br /> https://www.artstation.com/dazdud <br />
                https://www.artstation.com/bachibacho.
              </p>
              <img className="socialicon" src={instaicon} />
              <img className="socialicon" src={twittericon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
