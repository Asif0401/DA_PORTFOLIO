import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../../theme/AppProvider";
import React, { useContext } from "react";
function Header() {
	const {themeMode } = useContext(AppContext);

  return (

		<Fade top duration={1000} distance="20px">
			
			<div>
				<header className="header">

					<NavLink to="/splash" tag={Link} className="logo">
						<span className="logo-name"> Asif Khan</span>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>

			
					<ul className="menu">
						
						<li>
							
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , color: themeMode === "lightTheme" ? "#277aa9":"#a8c66b"}}
							>
								Home
								
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								tag={Link}
								activeStyle={{ fontWeight: "bold", color: themeMode === "lightTheme" ? "#277aa9":"#a8c66b" }}
							>
								Education
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , color: themeMode === "lightTheme" ? "#277aa9":"#a8c66b"}}
							>
								Experience
							</NavLink>
						</li>
					
            <li>

            </li>
						<li>
							<NavLink
								to="/contact"
                className = "test_active"
								tag={Link}
                exact
                activeStyle={{ fontWeight: "bold" , color:'#a8c66b'}}
							>
								Contact Me
							</NavLink>
						</li>

					</ul>
				</header>
			</div>
			
			
		</Fade>
		

	);
}
export default Header;
