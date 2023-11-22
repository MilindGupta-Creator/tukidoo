import React from "react";
import logo from "../../assets/logo.jpg";
import "./LeftSide.css"
import passportpic from "../../assets/passportpic.JPG"

const LeftSide = () => {
  return (
    <div className="leftside">
      <section className="items">
        <img className="logo" src={logo} alt=""  />
        <i class="fa-solid fa-bars-staggered"></i>
        <i class="fa-regular fa-bell"></i>
        <i class="fa-regular fa-clock"></i>
        <i class="fa-solid fa-list-check"></i>
        <i class="fa-regular fa-eye"></i>
        <i class="fa-solid fa-user-group"></i>
        <i class="fa-solid fa-chart-simple"></i>
        
      </section>
    <img className="passport" src={passportpic} alt="" />
    </div>
  );
};

export default LeftSide;
