import React, { useState } from "react";

const Accordion = () => {
	return (
		<section className="relative z-20 overflow-hidden bg-[#DDC9B4] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
			<div className="container mx-auto">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
							<h2 className="mb-4 text-3xl font-rubic font-black text-dark dark:text-neon-orange sm:text-[40px]/[48px]">
								Any Questions? Look Here
							</h2>
							<p className="text-lg font-worksans text-body-color dark:text-off-white">
								Here are some FAQs that can help answer your
								questions
							</p>
						</div>
					</div>
				</div>

				<div className="-mx-4 flex flex-wrap">
					<div className="w-full font-worksans px-4 lg:w-1/2">
						<AccordionItem
							header="What is HELPERHIVE?"
							text="HELPERHIVE is an advanced AI-powered platform designed to provide precise and relevant answers to a wide range of user queries. It leverages cutting-edge technology to assist users efficiently and effectively."
						/>
						<AccordionItem
							header="How does HELPERHIVE assist users?"
							text="HELPERHIVE streamlines the process of finding information by providing instant, accurate answers to user queries. Users can ask questions on various topics and receive tailored responses, enhancing their overall experience."
						/>
						<AccordionItem
							header="What technologies power HELPERHIVE?"
							text="HELPERHIVE is built using advanced technologies such as Python, PyTorch, and transformer libraries. These technologies enable the AI to understand and respond to user queries effectively."
						/>
					</div>
					<div className="w-full px-4 lg:w-1/2">
						<AccordionItem
							header="How secure is the HELPERHIVE platform?"
							text="Security is a top priority for HELPERHIVE. We implement best practices in cybersecurity to protect user data and ensure the integrity and privacy of all interactions on the platform."
						/>
						<AccordionItem
							header="Can HELPERHIVE integrate with other systems?"
							text="Yes, HELPERHIVE is designed to integrate seamlessly with other systems, allowing for smooth data exchange and enhancing existing workflows without requiring extensive changes."
						/>
						<AccordionItem
							header="How does HELPERHIVE ensure accuracy in its responses?"
							text="HELPERHIVE utilizes sophisticated AI models trained on diverse datasets to provide accurate and relevant answers. Continuous learning and updates help maintain high accuracy and relevance in responses."
						/>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 right-0 z-[-1]">
				<svg
					width="1440"
					height="886"
					viewBox="0 0 1440 886"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						opacity="0.5"
						d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
						fill="url(#paint0_linear)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="1308.65"
							y1="1142.58"
							x2="602.827"
							y2="-418.681"
							gradientUnits="userSpaceOnUse">
							<stop stopColor="#404040" stopOpacity="0.36" />
							<stop
								offset="1"
								stopColor="#404040"
								stopOpacity="0"
							/>
							<stop
								offset="1"
								stopColor="#404040"
								stopOpacity="0.096144"
							/>
						</linearGradient>
					</defs>
				</svg>
			</div>
		</section>
	);
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
	const [active, setActive] = useState(false);

	const handleToggle = () => {
		event.preventDefault();
		setActive(!active);
	};
	return (
		<div className="mb-8 animate-bounce mx-auto w-4/5 rounded-lg bg-[#EFE7DA] p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
			<button
				className={`faq-btn flex w-full text-left`}
				onClick={() => handleToggle()}>
				<div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg text-primary dark:bg-[[#EFE7DA]]">
					<svg
						className={`fill-primary stroke-primary duration-200 ease-in-out ${
							active ? "rotate-180" : ""
						}`}
						width="17"
						height="10"
						viewBox="0 0 17 10"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
							fill="grey"
							stroke=""
						/>
					</svg>
				</div>

				<div className="w-full ">
					<h4 className="mt-1 text-lg font-rubic font-black tracking-wide dark:text-neon-orange">
						{header}
					</h4>
				</div>
			</button>

			<div
				className={`pl-[62px] duration-200 ease-in-out ${
					active ? "block" : "hidden"
				}`}>
				<p className="py-3 text-base leading-relaxed text-body-color  duration-200 ease-in-out dark:text-off-white">
					{text}
				</p>
			</div>
		</div>
	);
};
