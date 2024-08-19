import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext, useRef } from "react";
import "../navbar/navbar.css";
import Search from "../search/Search";
import { SearchTermContext } from "../../App";
import ToggleVisibility from "./ToggleVisibility";

function Navbar() {
  const navigate = useNavigate();
  const navRef = useRef();
  const loginButtonRef = useRef(null);
  const registerButtonRef = useRef(null);
  const profileRef = useRef(null);
  const nameRef = useRef(null);
  const logoutButtonRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const { setSearchTerm } = useContext(SearchTermContext);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const onSearchChange = (_searchTerm) => {
    setSearchTerm(_searchTerm);
  };

  return (
    <header>
      <h1 className="logo">
        <Link to="/">Moovyezz</Link>
        <ToggleVisibility
          loginButtonRef={loginButtonRef}
          registerButtonRef={registerButtonRef}
          profileRef={profileRef}
          nameRef={nameRef}
          logoutButtonRef={logoutButtonRef}
        />
      </h1>
      <div className="functions">
        <Search onSearchChange={onSearchChange} />
        <h2 className="name" ref={nameRef}>
          Hi, {user.username}!
        </h2>
        <Link to="/profile">
          <button ref={profileRef}>Profile</button>
        </Link>
        <nav ref={navRef}>
          <button ref={loginButtonRef}>
            <Link to="/login">Login</Link>
          </button>
          <button ref={registerButtonRef}>
            <Link to="/register">Register</Link>
          </button>
          <button ref={logoutButtonRef} onClick={logout}>
            Logout
          </button>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
