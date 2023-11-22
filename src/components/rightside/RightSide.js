import React from "react";
import "./RightSide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import student from "../../assets/child.jpeg";
import teacher from "../../assets/teacher.avif";
import YouTube from 'react-youtube';
import {
  faPhone,
  faShareFromSquare,
  faUserTie,
  faLandmark,
  faComments,
  faCameraRetro,
  faMicrophone,
  faRightFromBracket,
  faChalkboard,
  faCirclePlay,
  faDiagramSuccessor,
  faFileExcel,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";

const RightSide = () => {

    const videoID = 'TMubSggUOVE';
    const opts = {
        height: '390',
        width: '680',
      };

  return (
    <div className="rightside">
      <div className="container">
        <nav className="nav1">
          <button className="less">{" < "}</button>
          <h3>Basic Mathematics 101</h3>
        </nav>
        <nav className="nav2">
          <section className="call">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#2e511f" }} />
            <p>Call Teacher</p>
          </section>
          <section className="call">
            <FontAwesomeIcon icon={faUserTie} />
            <p>Support</p>
          </section>
        </nav>
      </div>
      <div className="buttons">
        <div className="btn">
          <FontAwesomeIcon icon={faLandmark} />
          <h4>ClassRoom</h4>
        </div>
        <div className="btn">
          <FontAwesomeIcon
            icon={faChalkboard}
            style={{
              "--fa-primary-color": "#a7bfe6",
              "--fa-secondary-color": "#aeb3bc",
            }}
          />
          <h4>WhiteBoard</h4>
        </div>

        <div className="btnv">
          <FontAwesomeIcon icon={faCirclePlay} /> <h4>Videos</h4>
        </div>
        <div className="btn">
          <FontAwesomeIcon icon={faDiagramSuccessor} />
          <h4>Slideshow</h4>{" "}
        </div>
        <div className="btn">
          <FontAwesomeIcon icon={faFileExcel} />

          <h4>Documents</h4>
        </div>
        <div className="btn">
          <FontAwesomeIcon icon={faFileVideo} />
          <h4>Doc.Cam</h4>
        </div>
      </div>
      <div className="panel">
        <div className="learnerScreen">
            <div style={{position:"relative"}}>
            <img className="student" src={student} alt="" />
            <p className="riddhi">Riddhi</p>
            </div>

            <div style={{position:"relative"}}>
            <img className="teacher" src={teacher} alt="" />
            <p className="riddhi">Mr Kaur</p>
            </div>
          
          
          <div className="icon-container"   >
            <div>
              <FontAwesomeIcon className="icons" icon={faCameraRetro} />
              <p style={{ marginTop: "-3px" }}>Cam</p>
            </div>
            <div>
              <FontAwesomeIcon className="icons" icon={faMicrophone} />
              <p style={{ marginTop: "-3px" }}>Mic</p>
            </div>
            <div>
            <FontAwesomeIcon className="icons" icon={faShareFromSquare} />
            <p style={{ marginTop: "-3px" }}>Share</p>
            </div>
            <div>
            <FontAwesomeIcon className="icons" icon={faComments} />
            <p style={{ marginTop: "-3px" }}>Chat</p>
            </div>
            <div>
            <FontAwesomeIcon className="icons" style={{color:"#27aa4e"}} icon={faRightFromBracket} />
            <p style={{ marginTop: "-3px" }}>Leave</p>
            </div>
          </div>
        </div>
        <div className="videoscreen">
        <YouTube videoId={videoID} opts={opts}  />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
