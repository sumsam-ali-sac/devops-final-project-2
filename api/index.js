import express from "express";
import { createServer } from "http";
import { config as dotenvConfig } from "dotenv";
import { setupMiddlewares } from "./config/middleware.js";
import { connectDB } from "./lib/connectDB.js";
import { setupRoutes } from "./config/routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import path from "path";
import { fileURLToPath } from "url";

// Use import.meta.url to create the equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenvConfig();
connectDB();

const app = express();

setupMiddlewares(app);
setupRoutes(app);

// Path to the static files directory
const distPath = path.join(__dirname, "../client/dist");

// Serve static files from the distPath directory
app.use(express.static(distPath));

// Serve the main index.html file for any route not handled by other routes
app.get("/*", (req, res) => {
	res.sendFile("index.html", { root: distPath });
});

app.use(errorHandler);

const server = createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
	console.log(
		`Server is listening on https://helphivebot.azurewebsites.net:${PORT}`
	);
});
