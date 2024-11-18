import React from "react";
import { TfiClipboard } from "react-icons/tfi";
import heroimg from "../assets/heroimg.jpg";
const AboutUs = () => {
  return (
    <section className="About Us" style={{marginTop:"50px"}}>
      <div className="aboutusdiv">
        <TfiClipboard size={50} />
        <p>
          Track Your <spam style={{ color: "rgb(100, 80, 80)" }}>Schedule</spam>
        </p>
      </div>
      <div className="aboutus-description">
        <div>
          <p>
            Stay Organized, Achieve More - Simplify Your Day with Our To-Do App!
            <br />
            Plan, Track, and Complete Your Tasks Effortlessly!
            <br />
            Manage Your Daily Goals - Keep Your Tasks in Check!
            <br />
            Your Ultimate Task Manager - Get Things Done, One Step at a Time!
            <br />
            Boost Productivity with Seamless Task Management!
          </p>
        </div>
        <div>
          <img src={heroimg} alt="hero image" width="100%"/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
