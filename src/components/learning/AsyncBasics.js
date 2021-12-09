import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const AsyncBasics = () => {
  // example of mirage async api call without redux
  const getMoviesHandler = useCallback(async () => {
    setMoviesLoading(true);
    try {
      const response = await axios.get("api/movies");
      console.log(response);
      // {"data":{"movies":[{"id":1,"name":"Inception","year":2010},{"id":2,"name":"Interstellar","year":2014},{"id":3,"name":"Dunkirk","year":2017}]},"status":200,"statusText":"OK"}
      setMovies(response.data.movies);
    } catch (error) {
      console.log(error);
      setMoviesError(error);
    }
    setMoviesLoading(false);
  }, []);

  const [movies, setMovies] = useState([]);
  const [moviesError, setMoviesError] = useState(null);
  const [moviesLoading, setMoviesLoading] = useState(false);

  useEffect(() => {
    getMoviesHandler();
  }, [getMoviesHandler]);
  // if you just have the pointer to the handler in the dependencies array and nothing else, the handler will only run when the component is rendered for the first time
  // it's not mandatory (React does some JS hoisting wizardry I don't care to learn about) to have the pointer to the handler in the dependencies array but it's good practice, because it is a dependency - But for this to work we need to wrap the handler with useCallback, the useCallback method also takes a second arg in the form of a dependencies array, so don't forgot that, or else you'll have an infinite loop

  let content = <p>No movies</p>;
  if (moviesLoading) {
    content = <p>Loading...</p>;
  }
  if (moviesError) {
    content = <p>{moviesError}</p>;
  }
  if (movies.length > 0) {
    content = (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>
              {movie.name} - {movie.year}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <p>AsyncBasics</p>
      {content}
    </div>
  );
};

export default AsyncBasics;
