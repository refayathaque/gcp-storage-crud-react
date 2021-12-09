import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/movies/get-slice";
import { postMovies } from "../../store/movies/post-slice";

const ReduxAdvanced = () => {
  const {
    entities: getMoviesReducerEntities,
    loading: getMoviesReducerLoading,
    error: getMoviesReducerError,
  } = useSelector((state) => {
    console.log("redux state.getMoviesReducer", state.getMoviesReducer);
    return state.getMoviesReducer;
  });
  const {
    // entities: postMoviesReducerEntities,
    loading: postMoviesReducerLoading,
    error: postMoviesReducerError,
  } = useSelector((state) => {
    console.log("redux state.postMoviesReducer", state.postMoviesReducer);
    return state.postMoviesReducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  let content = <p>No movies</p>;
  if (getMoviesReducerLoading) {
    content = <p>Loading...</p>;
  }
  if (getMoviesReducerError) {
    content = <p>{getMoviesReducerError.message}</p>;
  }
  if (getMoviesReducerEntities.length > 0) {
    content = (
      <ul>
        {getMoviesReducerEntities.map((movie) => (
          <li key={movie.id}>
            <p>
              {movie.name} - {movie.year}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  const nameRef = useRef("");
  const yearRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const movie = {
      name: nameRef.current.value,
      year: yearRef.current.value,
    };
    dispatch(postMovies(movie));
    dispatch(getMovies());
  };

  const addMovieForm = (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <input type="text" id="year" ref={yearRef} />
      </div>
      {postMoviesReducerLoading === "pending" && <p>Loading...</p>}
      {postMoviesReducerError && <p>{postMoviesReducerError.message}</p>}
      <button>Add Movie</button>
    </form>
  );

  return (
    <div>
      <p>ReduxAdvanced</p>
      {content}
      {addMovieForm}
    </div>
  );
};

export default ReduxAdvanced;
