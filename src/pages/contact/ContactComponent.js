import React, { Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {Fade} from 'react-reveal';
import './ContactComponent.css';
import { AppContext } from "../../theme/AppProvider";
import { useContext } from "react";

const blogSection = {

	title: "Blogs",
	subtitle:
		"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
	link: "https://www.blogger.com/",
	avatar_image_path: "blogs_image.svg"
};

const addressSection = {
	title: "Address",
	subtitle:
		"Bangalore, India",
	avatar_image_path: "address_image.svg",
	location_map_link: "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu"
};

const phoneSection = {
    title: "Phone Number",
    subtitle: "+91 9177133236"
}

const ContactData = {
	title: "Contact Me",
    profile_image_path: "asif.png",
    description: "Get in touch with me."
};

class Contact extends Component {
    render() {
		const themeMode = this.props.themeMode;

        return (
					<div className="contact-main">
						<Header />
						<div className="basic-contact">
							<Fade bottom duration={1000} distance="40px">
								<div className="contact-heading-div">
									<div className="contact-heading-img-div">
									<center>	<img
											src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
											alt=""
										/></center>
									</div> <br/>
									<div className="contact-heading-text-div">
										<h1 className="contact-heading-text">
											{ContactData["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{ContactData["description"]}
										</p>
										<SocialMedia />
										<div className="resume-btn-div">
											<Button
												text="See My Resume"
												newTab={true}
												href={require(`../../assests/Resume.pdf`)}
											/>
										</div>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="blog-heading-div">
									<div className="blog-heading-text-div">
										<h1 className="blog-heading-text">
											{blogSection["title"]}
										</h1>
										<p className="blog-header-detail-text subTitle">
											{blogSection["subtitle"]}
										</p>
										<div className="blogsite-btn-div">
											<Button
												text="Visit My Blogsite"
												newTab={true}
												href={blogSection.link}
											/>
										</div>
									</div>
									<div className="blog-heading-img-div">
										<img
										src= {themeMode === "lightTheme" ? require("../../assests/images/blogs_image.svg"): require("../../assests/images/blogs_image-dark.svg")}											alt=""
										/>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="address-heading-div">
									<div className="contact-heading-img-div">
										<img
										src= {themeMode === "lightTheme" ? require("../../assests/images/address_image.svg"): require("../../assests/images/address_image-dark.svg")}											alt=""
										alt=""
										/>
									</div>
									<div className="address-heading-text-div">
										<h1 className="address-heading-text">
											{addressSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{addressSection["subtitle"]}
										</p>
										<h1 className="address-heading-text">
											{phoneSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{phoneSection["subtitle"]}
										</p>
										<div className="address-btn-div">
											<Button
												text="Visit on Google Maps"
												newTab={true}
												href={addressSection.location_map_link}
											/>
										</div>
									</div>
								</div>
							</Fade>
						</div>
						<Footer />
					</div>
				);
    }
}

export default () => {
	const {themeMode } = useContext(AppContext);
	return (
		<Contact themeMode={themeMode} />
	)
  }