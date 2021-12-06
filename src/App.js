import classes from "./App.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import ListBuckets from "./components/storage-operations/ListBuckets";
import ListObjects from "./components/storage-operations/ListObjects";
import CreateBuckets from "./components/storage-operations/CreateBuckets";
import DeleteBuckets from "./components/storage-operations/DeleteBuckets";
import UpdateBuckets from "./components/storage-operations/UpdateBuckets";
import AddObjects from "./components/storage-operations/AddObjects";
import DeleteObjects from "./components/storage-operations/DeleteObjects";
import UpdateObjects from "./components/storage-operations/UpdateObjects";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store";

const App = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <div className={classes.pagewrap}>
      <nav>
        <Nav></Nav>
      </nav>
      <main className="p-4">
        <h1>GCP Storage Management</h1>
        <p>hello again</p>
        <p>hello again</p>

        <div className="border border-primary">
          <p>Redux counter example</p>
          {show && <p>{counter}</p>}
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={decreaseHandler}>Decrease</button>
          <button onClick={toggleHandler}>Toggle</button>
        </div>
        <div className="mt-2 border border-success">
          <p>Redux auth example</p>
        </div>

        <Routes>
          <Route path="/" element={<ListBuckets />} />
          <Route path="listObjects" element={<ListObjects />} />
          <Route path="createBuckets" element={<CreateBuckets />} />
          <Route path="deleteBuckets" element={<DeleteBuckets />} />
          <Route path="updateBuckets" element={<UpdateBuckets />} />
          <Route path="addObjects" element={<AddObjects />} />
          <Route path="deleteObjects" element={<DeleteObjects />} />
          <Route path="updateObjects" element={<UpdateObjects />} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
