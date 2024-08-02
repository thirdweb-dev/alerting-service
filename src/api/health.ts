import type { Context } from "hono";

export const handleHealthRoute = (c: Context) => {
	return c.json({ data: "ok" });
};
