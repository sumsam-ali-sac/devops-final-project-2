import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
function HeroSection() {
	return (
		<section className="flex flex-col md:flex-row mt-5 items-center justify-center md:justify-between p-10 pb-36 md:p-20 bg-dim-orange">
			<HeroContent />
			<HeroImage />
		</section>
	);
}
function HeroContent() {
	return (
		<div className="w-full md:max-w-1/2 mb-5 md:mb-0 md:order-1 text-left">
			<h1 className="text-4xl md:text-7xl font-rubic font-black text-[#222] mb-5 leading-snug">
				Your Personal
				<br /> Query Assistant{" "}
				<span className="text-neon-orange">Helper Hive</span>
			</h1>
			<p className="font-worksans md:tracking-wider text-xl md:text-xl text-[#222] mb-5 leading-relaxed">
				Unlock the Power of Information with Helper Hive's Tailored
				Assistance and Instant Answers for Your Queries
			</p>
			<Link to="https://helphivechat.azurewebsites.net/">
				<button className="bg-neon-orange text-[#222] font-worksans px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg m-1 cursor-pointer rounded-lg transition-colors border-2 border-neon-orange hover:bg-dim-orange hover:text-neon-orange">
					Talk to Helphive
				</button>
			</Link>

			<div className="w-full md:w-auto font-worksans text-[#222] py-4 mt-5 md:mt-0">
				<div className="flex justify-center space-x-4 bg-dim-orange">
					<div className="text-center mx-4 md:mx-6">
						<span className="text-2xl md:text-3xl font-rubic font-black">
							<CountUp end={100} duration={2.75} />
						</span>
						<div className="md:tracking-wider text-xl md:text-xl font-worksans mt-2">
							Topics
						</div>
					</div>
					<div className="text-center mx-4 md:mx-6">
						<span className="text-2xl md:text-3xl font-rubic font-black">
							<CountUp end={1000} duration={2.75} suffix="+" />
						</span>
						<div className="md:tracking-wider text-xl md:text-xl font-worksans mt-2">
							Queries
						</div>
					</div>
					<div className="text-center mx-4 md:mx-6">
						<span className="text-2xl md:text-3xl font-rubic font-black">
							<CountUp end={99} duration={2.75} suffix="%" />
						</span>
						<div className="md:tracking-wider text-xl md:text-xl font-worksans mt-2">
							Accuracy
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function HeroImage() {
	return (
		<div className="w-1/2 md:order-2 text-center">
			<div>
				<img
					className="rounded-t-2xl transition-transform duration-300 cursor-pointer hover:scale-105"
					src="/ChatImage.png"
					alt="Fine"
				/>
				<div className="text-[#222] text-lg text-center bg-dim-orange rounded-b-2xl p-5 mt-[-9px] font-rubic">
					Mistral Open-source 7B model
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
