import e from "../../../dbschema";
import * as EdgeDB from "../edgedb";

export async function getAll() {
  return e
    .select(e.List, () => ({
      ...e.List["*"],
      tasks: e.Task["*"],
    }))
    .run(EdgeDB.client);
}

export async function create(title: string) {
  return e
    .insert(e.List, {
      title,
    })
    .run(EdgeDB.client);
}

export async function update(id: string, title: string) {
  return e
    .update(e.List, () => ({
      set: { title },
      filter_single: { id },
    }))
    .run(EdgeDB.client);
}

export async function remove(id: string) {
  return e
    .delete(e.List, () => ({
      filter_single: { id },
    }))
    .run(EdgeDB.client);
}
