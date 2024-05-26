import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
	const { email } = req.body;

	try {
		const user = await User.findOneAndDelete({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};
