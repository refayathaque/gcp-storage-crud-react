import { createServer } from "miragejs";

const makeServer = () => {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/movies", () => {
        return {
          movies: [
            { id: 1, name: "Inception", year: 2010 },
            { id: 2, name: "Interstellar", year: 2014 },
            { id: 3, name: "Dunkirk", year: 2017 },
          ],
        };
      });
    },
  });
  return server;
};

export default makeServer;
