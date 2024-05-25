import React from "react";
import logo from "/chatbotLogo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="bg-dim-orange p-3.5 bottom-0 left-0 right-0 w-full">
			<div className="container w-full mx-auto flex flex-wrap items-center justify-between">
				<Link to="/">
					<div className="flex items-center text-xl font-rubic font-black">
						<img src={logo} alt="Logo" className="mr-3 h-10" />
						<span className="text-neon-orange">HELPER</span>
						<span className="text-[#222]">HIVE</span>
					</div>
				</Link>

				<div className="w-full lg:w-auto font-worksans flex flex-wrap items-center lg:justify-between mt-4 lg:mt-0 text-base">
					<Link
						to="/contact-us"
						className="text-[#222] hover:text-dim-orange transition-colors mr-3 pr-5 py-3 block">
						Contact Us
					</Link>
					<Link
						to="/about"
						className="text-[#222] hover:text-dim-orange transition-colors mr-3 pr-4 py-3 block">
						About
					</Link>
				</div>

				<div className="flex justify-center lg:justify-start mt-0 ">
					<a
						href="https://facebook.com"
						className="text-[#222] mr-4 hover:text-dim-orange transition-colors">
						<FaFacebook />
					</a>
					<a
						href="https://twitter.com"
						className="text-[#222] mr-4 hover:text-dim-orange transition-colors">
						<FaTwitter />
					</a>
					<a
						href="https://instagram.com"
						className="text-[#222] mr-4 hover:text-dim-orange transition-colors">
						<FaInstagram />
					</a>
					<a
						href="https://linkedin.com"
						className="text-[#222] hover:text-dim-orange transition-colors">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
