import createClient from "edgedb";

export const client = createClient({
  dsn: Bun.env.EDGEDB_DSN,
  tlsSecurity: "insecure",
});
