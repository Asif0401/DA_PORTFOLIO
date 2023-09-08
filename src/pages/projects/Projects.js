import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from "../../components/button/Button";
import {Fade} from 'react-reveal';
//import ProjectsData from '../../shared/opensource/projects.json';
import './Projects.css';

const projectsHeader = {
    title: "Projects",
    quote_symbol: "\u201C",
    description: "The measure of who we are is what we do with what we have. - Vince Lombardi",
    avatar_image_path: "projects_image.svg"
}


class Projects extends Component {
    render(){
        return (
					<div className="projects-main">
						<Header />
						<div className="basic-projects">
							<Fade bottom duration={1000} distance="40px">
								<div className="projects-heading-div">
									<div className="projects-heading-img-div">
										<img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="projects-heading-text-div">
										<h1 className="projects-heading-text">
											{projectsHeader.title}
										</h1>
										<h2 className="projects-header-detail-text subTitle">
                    <text style={{fontSize:'100px',position:'relative',right:'-10px',bottom:'-45px' }}>{projectsHeader.quote_symbol} </text>

											{projectsHeader["description"]}
                    </h2>
									</div>
								</div>
							</Fade>
						</div>
						
						<Button
							text={"More Projects"}
							className="project-button"
							href="https://github.com/31"
							newTab={true}
						/>
						<Footer />
					</div>
				);
    }
}

export default Projects;
