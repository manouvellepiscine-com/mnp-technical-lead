import Elysia, { t } from "elysia";
import * as Lists from "../../libs/lists/lists";
import listRouter from "./list";

const listsRouter = new Elysia({ prefix: "/lists" })
  .get("/", async () => {
    const lists = await Lists.getAll();
    return lists;
  })
  .post(
    "/",
    async ({ body: { title } }) => {
      const list = await Lists.create(title);
      return list;
    },
    {
      body: t.Object({
        title: t.String(),
      }),
    }
  )
  .use(listRouter);

export default listsRouter;
