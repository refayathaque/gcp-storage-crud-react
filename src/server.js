import { createServer, Model } from "miragejs";

const makeServer = () => {
  let server = createServer({
    models: {
      movie: Model,
    },
    routes() {
      this.namespace = "api";

      this.get(
        "/movies",
        (schema) => {
          return schema.movies.all();
        },
        { timing: 100 }
      );

      this.post("/movies", (schema, request) => {
        console.log(request);
        let attrs = JSON.parse(request.requestBody);
        return schema.movies.create(attrs);
      });
    },
    seeds(server) {
      server.create("movie", { name: "Inception", year: 2010 });
      server.create("movie", { name: "Interstellar", year: 2014 });
      server.create("movie", { name: "Dunkirk", year: 2017 });
    },
  });
  return server;
};

export default makeServer;
