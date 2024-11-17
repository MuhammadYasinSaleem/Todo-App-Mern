import React from "react";
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <section className="herosection">
      <div className="herodiv">
        <Marquee speed={80} gradient={false} style={{ fontSize: "100px", fontWeight: "bold" }}>
          Manage Your Everyday Tasks with us
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
