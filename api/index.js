import express from "express";
import { createServer } from "http";
import { config as dotenvConfig } from "dotenv";
import { setupMiddlewares } from "./config/middleware.js";
import { connectDB } from "./lib/connectDB.js";
import { setupRoutes } from "./config/routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenvConfig();
connectDB();

const app = express();

setupMiddlewares(app);
setupRoutes(app);

app.use(express.static("client_build"));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client_build", "index.html"));
});

const server = createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
