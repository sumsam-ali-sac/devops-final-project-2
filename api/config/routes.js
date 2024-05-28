import authRouter from "../routes/auth.route.js";
import userRouter from "../routes/user.route.js";
export function setupRoutes(app) {
	app.use("/api/auth", authRouter);
	app.use("/api/user", userRouter);
}
