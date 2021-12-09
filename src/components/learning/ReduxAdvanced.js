import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/movies-slice";

const ReduxAdvanced = () => {
  const { entities, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  let content = <p>No movies</p>;
  if (loading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>{error.message}</p>;
  }
  if (entities.length > 0) {
    content = (
      <ul>
        {entities.map((movie) => (
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
      <p>ReduxAdvanced</p>
      {content}
    </div>
  );
};

export default ReduxAdvanced;
