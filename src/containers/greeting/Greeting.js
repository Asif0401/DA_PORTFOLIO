import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { AppContext } from "../../theme/AppProvider";
import React, { useContext } from "react";
export default function Greeting() {
  const {themeMode } = useContext(AppContext);

  return (
    <Fade bottom duration={1000} distance="40px">
    <section id="feature1">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-6">
        </div>
      </div>
    </div>
    </section>

      <div className="greet-main" id="greeting">

        <div className="greeting-main">
          
          <div className="greeting-image-div">
            <img
              alt="Rushabh sitting on table"
              src={themeMode === "lightTheme" ? require("../../assests/images/graphic_chart.svg") : require("../../assests/images/graphic_chart_dark.svg")} 
            ></img>
          </div>
          <div className="greeting-text-div">
            <div>

              {/* <h2 className='greetingtit'> {greeting.title} </h2> */}
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />


              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>

          </div>

        </div>
      </div>
    </Fade>

  );
}
