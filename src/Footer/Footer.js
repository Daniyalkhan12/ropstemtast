import React from "react";
import "./footer.css";
import logoimg from "./src/../../Assets/logo.svg";
import faceicon from "./src/../../Assets/face.png";
import twittericon from "./src/../../Assets/Group82.png";
import youtube from "./src/../../Assets/Group83.png";
import game from "./src/../../Assets/Group156.png";
const Footer = () => {
  return (
    <div className="bgimagfooter">
      <div className="footerImg">
        <img className="footerlogo" src={logoimg} />
      </div>
      <p className="footertext">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetu{" "}
      </p>
      <div className="socialicons">
        <img className="socialiconsimg" src={faceicon} />
        <img className="socialiconsimg" src={twittericon} />
        <img className="socialiconsimg" src={youtube} />
        <img className="socialiconsimg" src={game} />
      </div>
      <hr />
      <div class="row" style={{ width: "80%", margin: "auto" }}>
        <div class="col-sm copyright">Copyright © 2022, 777 Club</div>
        <div class="col-sm">
          <ul className="navbar">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
