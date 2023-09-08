import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";

const experience = {
	title: "Experience",
	subtitle: "Work,Internships and Publications",
	quote_symbol: "\u201C",
	description:
		"The only source of knowledge is experience.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				
			]
		},
		{
			title: "Internships",
			experiences: [

			  {
					title: "Data Analyst Intern",
					company: "Nineleaps Technology",
					company_url:
						"https://www.nineleaps.com/",
					logo_path: "Nineleaps-logo.png",
					duration: "Feb 2023 - Present",
					location: "Bangalore, India",
					description:[
						" ⦿ Proficient in diverse data processing technologies like Google Sheets, SQL, Python (Pandas and Numpy),Apache Spark, Sqoop, Hadoop, and Hive.",<br/>,
						" ⦿ Designed and executed ETL pipelines for diverse data sources, ensuring seamless extraction, transformation, and loading processes.",<br/>,
						" ⦿ Collaborated with cross-functional teams to understand data requirements and implement effective data solutions, craftedinteractive and visually appealing dashboards using Tableau and Power BI for data visualization and insights.",<br/>,
						
					],
					color: "#0071C5"
				},
				{
					title: "SDE Intern",
					company: "Atmana",
					company_url:
						"https://atmana.org/",
					logo_path: "atmana.jpeg",
					duration: "March 2022 - August 2022",
					location: "Bangalore, India",
					description:[
						" ⦿ Transformed BlockerX Chrome extension using HTML, CSS, JavaScript, and jQuery, resulting in a user increase from under 20,000 to 60,000+ and a revenue stream.",<br/>,
						" ⦿ Enhanced blocking algorithm in JavaScript, reducing false positives and boosting premium conversions.",<br/>,
						" ⦿ Streamlined BlockerX web presence by merging two sites using ReactJS, driving increased traffic and user engagement,adeptly coordinated tasks and changes using Git version control. ",<br/>,
						
					],
					color: "#0071C5"
				},
				

			]
		},
		{
			title: "Publications",
			experiences: [ 
				
			]
		}
	]
};

class Experience extends Component {
	render() {
		const themeMode = this.props.themeMode;

		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={themeMode === "lightTheme" ? require(`../../assests/images/experience.svg`) : require(`../../assests/images/experience-dark.svg`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">{experience["subtitle"]}
								</h3>
								<h2 className="heading-sub-text">
								<blockquote id="exp_block">
								{experience["description"]}  
								<cite>Albert Einstein</cite>
								</blockquote>
								</h2>

							</div>
						</div>
					</Fade>

				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<br/ >
        <br/><br/>
				<div><center><h2 id="heading"> LinkedIn Recommendations</h2> <br/><br/>
				<Carousel autoPlay = {true} showThumbs={false} showStatus={false} useKeyboardArrows centerSlidePercentage={50}>
				     {/*Kiran's Recommendation*/}
								<div key="content-5" className="my-slide-content">
								    <br/>
										<center>
										<a href="https://www.linkedin.com/in/kiranpalsingh1806/">
										<div class="circular--portrait">
										<img alt="" src={require(`../../assests/images/kiran.jpeg`)} />
						        </div>
										</a>
										</center> <br/><br/>
										<h4 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontFamily:'cassette',marginTop:'-30px', marginBottom:'0px'}}>Kiranpal Singh</h4>
										<i><h5 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontFamily:'cassette',marginTop:'5px',marginBottom:'28px'}}>Full Stack Developer</h5></i>
										<i><h5 style={{color:'#e4405f', fontSize:'20px', marginTop:'-20px',fontFamily:'cassette'}}>Atmana Inc.</h5></i>
										<text style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontSize:'120px',position:'relative',bottom:'-25px' }}>{experience.quote_symbol} </text>

										<blockquote className='textcs'>  Asif has unwavering dedication towards problem solving. His open-minded approach make him a true joy to collaborate with on projects.I am fortunate to call him not only a peer but also a friend.</blockquote>

                </div>

								{/*Pragya's Recommendation*/}
	 								<div key="content-5" className="my-slide-content">
									    <br/>
	 										<center>
											<a href="https://www.linkedin.com/in/pragyaverma5/">
											<div class="circular--portrait">
	 										<img alt="" src={require(`../../assests/images/prag.png`)} />
	 						        </div>
											</a>
											</center> <br/><br/>
	 										<h4 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontFamily:'cassette',marginTop:'-30px', marginBottom:'0px'}}>Pragya Verma</h4>
	 										<i><h5 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontFamily:'cassette',marginTop:'5px',marginBottom:'28px'}}>Data Analyst </h5></i>
	 										<i><h5 style={{color:'#e4405f',fontSize:'20px',fontFamily:'cassette',marginTop:'-20px'}}>Nineleaps Technology</h5></i>
											<text style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontSize:'120px',position:'relative',bottom:'-25px' }}>{experience.quote_symbol} </text>

	 										<blockquote className='textcs'> Asif's analytical skills are truly exceptional. His ability to dissect complex data sets and deliver actionable insights is impressive</blockquote>

                 </div>
								 {/*Akash's Recommendation*/}
 	 								<div key="content-5" className="my-slide secondary complex">
									    <br/>
 	 										<center>
											<a href="https://www.linkedin.com/in/aakashjena/">
											<div class="circular--portrait">
										  <img alt="" src={require(`../../assests/images/akash.jpeg`)} />
 	 						        </div>
											</a>

											</center> <br/><br/>
 	 										<h4 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260', fontFamily:'cassette',marginTop:'-30px', marginBottom:'0px'}}>Aakash Jena</h4>
 	 										<i><h5 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260', fontFamily:'cassette',marginTop:'5px',marginBottom:'28px'}}>Full Stack Developer </h5></i>
 	 										<i><h5 style={{color:'#e4405f',fontSize:'20px',marginTop:'-10px', fontFamily:'cassette'}}>Atmana Inc</h5></i>
											<text style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontSize:'120px',position:'relative',bottom:'-25px' }}>{experience.quote_symbol} </text>

											<blockquote className='textcs'> I have got multiple Opportunities to work with Asif on several Front End Projects. His perspective of creating a professional UI is commendable, Collaborative person </blockquote>

 	                 </div>
								 {/*Abhi's Recommendation*/}
 	 								<div key="content-5" className="my-slide secondary complex">
									    <br/>
 	 										<center>
											<a href="https://www.linkedin.com/in/abhiramch">
											<div class="circular--portrait">
										  <img alt=""  src={require(`../../assests/images/abhi.jpg`)} />
 	 						        </div>
											</a>

											</center> <br/><br/>
 	 										<h4 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',marginTop:'-30px',fontFamily:'cassette', marginBottom:'0px'}}>Abhi Ram</h4>
 	 										<i><h5 style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontFamily:'cassette',marginTop:'5px',marginBottom:'28px'}}>Data Analyst </h5></i>
 	 										<i><h5 style={{color:'#e4405f',marginTop:'-20px',fontSize:'20px',fontFamily:'cassette'}}>Nineleaps Technology</h5></i>
											<text style={{color:themeMode === "lightTheme" ? '#1789ef': '#97b260',fontSize:'120px',position:'relative',bottom:'-25px' }}>{experience.quote_symbol} </text>

											<blockquote className='textcs'>Asif's dedication to data analysis is unparalleled. His contributions have consistently driven data-driven decision-making to new heights within our team
											</blockquote>
 	                 </div>

            </Carousel> </center>

						</div>

				<Footer />

			</div>


		);
	}
}


export default () => {
	const {themeMode } = useContext(AppContext);
	return (
		<Experience themeMode={themeMode} />
	)
  }