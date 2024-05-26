import authRouter from "../routes/auth.route.js";
import userRouter from "../routes/user.route.js";
export function setupRoutes(app) {
	app.use("/api/node/auth", authRouter);
	app.use("/api/node/user", userRouter);
}
