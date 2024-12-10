import { Elysia } from "elysia";
import listsRouter from "./routes/lists/lists";

const app = new Elysia()
  .get("/", () => "Server started")
  .group("/v1", (elysia) => elysia.use(listsRouter))
  .listen(Bun.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
