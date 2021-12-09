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
// import ReduxBasics from "./components/learning/ReduxBasics";
import ReduxAdvanced from "./components/learning/ReduxAdvanced";
import AsyncBasics from "./components/learning/AsyncBasics";

const App = () => {
  return (
    <div className={classes.pagewrap}>
      <nav>
        <Nav></Nav>
      </nav>
      <main className="p-4">
        <h1>GCP Storage Management</h1>
        <p>hello again</p>
        <p>hello again</p>
        {/* <AsyncBasics /> */}
        <ReduxAdvanced />
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
