import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav p-2 bg-dark">
      <Link className="nav-link" to="/">
        List buckets
      </Link>
      <Link className="nav-link" to="/listObjects">
        List objects
      </Link>
      <Link className="nav-link" to="/createBuckets">
        Create buckets
      </Link>
      <Link className="nav-link" to="/deleteBuckets">
        Delete buckets
      </Link>
      <Link className="nav-link" to="/updateBuckets">
        Update buckets
      </Link>
      <Link className="nav-link" to="/addObjects">
        Add objects
      </Link>
      <Link className="nav-link" to="/deleteObjects">
        Delete objects
      </Link>
      <Link className="nav-link" to="/updateObjects">
        Update objects
      </Link>
    </nav>
  );
};

export default Nav;
