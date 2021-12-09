import { createServer, RestSerializer } from "miragejs";

const makeServer = () => {
  let server = createServer({
    serializers: {
      application: RestSerializer,
    },
    routes() {
      this.namespace = "api";

      this.get(
        "/movies",
        () => {
          return {
            movies: [
              { id: 1, name: "Inception", year: 2010 },
              { id: 2, name: "Interstellar", year: 2014 },
              { id: 3, name: "Dunkirk", year: 2017 },
            ],
          };
        },
        { timing: 100 }
      );
    },
  });
  return server;
};

export default makeServer;
