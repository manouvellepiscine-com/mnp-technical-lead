import Elysia, { t } from "elysia";
import * as Lists from "../../libs/lists/lists";

const listRouter = new Elysia({ prefix: "/:id" })
  .patch(
    "/",
    async ({ params: { id }, body: { title } }) => {
      const list = await Lists.update(id, title);
      return list;
    },

    {
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
      body: t.Object({
        title: t.String(),
      }),
    }
  )
  .delete(
    "/",
    async ({ params: { id } }) => {
      const list = await Lists.remove(id);
      return list;
    },
    {
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
    }
  );

export default listRouter;
