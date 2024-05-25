import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/send", formData);
			if (response.status === 200) {
				alert("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" }); // Reset form
			} else {
				alert("Failed to send message. Please try again.");
			}
		} catch (error) {
			alert("Failed to send message. Please try again.");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-[#DDC9B4] ">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg p-8 space-y-6 bg-[[#EFE7DA]] rounded-lg shadow-lg">
				<div>
					<label
						htmlFor="name"
						className="block mb-2 text-lg font-medium text-off-white">
						Your Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg placeholder-gray-400 focus:outline-none focus:ring-neon-orange focus:border-neon-orange"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-lg font-medium text-off-white">
						Your Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg placeholder-gray-400 focus:outline-none focus:ring-neon-orange focus:border-neon-orange"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block mb-2 text-lg font-medium text-off-white">
						Your Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows="4"
						className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg placeholder-gray-400 focus:outline-none focus:ring-neon-orange focus:border-neon-orange"
						value={formData.message}
						onChange={handleChange}></textarea>
				</div>
				<button
					type="submit"
					className="w-full px-5 py-2 text-lg font-medium text-[[#EFE7DA]] bg-[#DDC9B4] rounded-lg hover:bg-[#DDC9B4] hover:text-dim-orange focus:outline-none focus:ring-4 focus:ring-neon-orange">
					Send Message
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
