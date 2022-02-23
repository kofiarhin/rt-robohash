import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <Link to="/">
          <h1 className="logo">Robohash</h1>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Link to="/">
        <h1 className="title">Search Robots</h1>
      </Link>
    </div>
  );
};

export default Header;
