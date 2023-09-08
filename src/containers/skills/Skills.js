import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills() {
  return (

    <div className="main" id="skills">
      <div className="skills-header-div">

        <Fade bottom duration={2000} distance="20px">
          {/*<h1 className="skills-header">What I have done?</h1>*/}
          <div class="mobile-js-hide">

          <section id="feature">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-6">
              </div>
            </div>
          </div>
          </section>
          </div>

          <h2 className="skills-header">What I Do?</h2>


        </Fade>
      </div>

      <SkillSection />
    </div>
  );
}
