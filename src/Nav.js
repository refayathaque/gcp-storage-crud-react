import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="nav p-2 bg-dark">
      <Link class="nav-link" to="/">
        List buckets
      </Link>
      <Link class="nav-link" to="/listObjects">
        List objects
      </Link>
      <Link class="nav-link" to="/createBuckets">
        Create buckets
      </Link>
      <Link class="nav-link" to="/deleteBuckets">
        Delete buckets
      </Link>
      <Link class="nav-link" to="/updateBuckets">
        Update buckets
      </Link>
      <Link class="nav-link" to="/addObjects">
        Add objects
      </Link>
      <Link class="nav-link" to="/deleteObjects">
        Delete objects
      </Link>
      <Link class="nav-link" to="/updateObjects">
        Update objects
      </Link>
    </nav>
  );
};

export default Nav;
