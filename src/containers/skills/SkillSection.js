import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Flip, Fade } from "react-reveal";
import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";

// export const { themeMode } = useContext(AppContext);

class SkillSection extends Component {

  render() {
    const themeMode = this.props.themeMode;
    return (
      
      <div>
        {skills.data.map(skill => {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div">
              <Fade right duration={1000}>

                <center>  <h1 className="skills-heading">{skill.title}</h1> </center>
                </Fade>
                <Fade left duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Flip left duration={2000}>
                <div className="skills-image-div">
                  <img
                    alt="Rushabh is Analysing Data"
                    src={themeMode === "lightTheme" ? require(`../../assests/images/${skill.imagePath}`):require(`../../assests/images/${skill.imagePathDark}`)}
                  ></img>
                </div>
              </Flip>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map(skillSentence => {
                      return (
                        <p className="subTitle skills-text" >{skillSentence}</p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              
            </div>
          );
        })}
      </div>
    );
  }
}

// export default SkillSection;

export default () => {
  const {themeMode } = useContext(AppContext);
  return (
      <SkillSection themeMode={themeMode} />
  )
}