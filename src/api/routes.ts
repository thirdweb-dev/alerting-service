import { Hono } from "hono";
import { handleHealthRoute } from "./health";

const baseRoute = new Hono();

/*
 * Public routes
 */
baseRoute.get("/health", handleHealthRoute);

export default baseRoute;
