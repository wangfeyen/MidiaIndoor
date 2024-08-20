import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "MidiaIndoor",
      user: "postgres",
      password: "2020",
    }
  }
};

export default config;