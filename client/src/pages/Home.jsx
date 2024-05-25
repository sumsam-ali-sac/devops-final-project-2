import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import UpdateSection from "../components/UpdateSection";

const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<UpdateSection />
			<Footer />
		</div>
	);
};

export default Home;
