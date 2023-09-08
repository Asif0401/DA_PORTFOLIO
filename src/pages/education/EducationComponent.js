import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from '../../containers/certifications/Certifications';
import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites';
import {competitiveSites}  from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";


class Education extends Component {
  
  render() {
    const themeMode = this.props.themeMode;
    return (
      <div className="education-main">
        <Header />
        <div className="basic-education">
          <Fade bottom duration={1000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img src= {themeMode === "lightTheme" ? require("../../assests/images/education.svg"): require("../../assests/images/education_dark.svg")} alt="" />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text">Education</h1>


<h3 style={{fontSize: "30px" ,fontFamily: "cassette", textAlign: "center", marginBottom: "10px"}}> Basic Education & Skills </h3>
                <h3 className="heading-sub-text">

                <blockquote id="edu_block">
                Live as if you were to die tomorrow. Learn as if you were to live forever.<cite>Mahatma Gandhi</cite>
                </blockquote>
                </h3>
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              </div>
            </div>
          </Fade>
          <Educations/>
          <Certifications />

        </div>
        <Footer />

      </div>
    );
  }
}


export default () => {
  const {themeMode } = useContext(AppContext);
  return (
      <Education themeMode={themeMode} />
  )
}