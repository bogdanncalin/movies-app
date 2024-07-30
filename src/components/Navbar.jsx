import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/create-movie">Create Movie</Link>
      </li>
      <li>
        <Link to="/">Movie List</Link>
      </li>
    </ul>
  );
}

export default Navbar;
