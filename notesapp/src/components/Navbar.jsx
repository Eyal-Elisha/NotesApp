import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {FaSun, FaMoon} from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const {theme,  toggleTheme} = useTheme();
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Notes</Link></li>
        <li><Link to="/about">About</Link></li>
        <button onClick={toggleTheme}>
            {theme === "light" ? <FaSun /> : <FaMoon />}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
