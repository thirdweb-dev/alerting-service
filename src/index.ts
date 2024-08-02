import dotenv from "dotenv";
dotenv.config({
	path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env",
});

import app from "./app";

const port = Number(process.env.PORT) || 3000;

export default {
	fetch: app.fetch,
	port,
};
