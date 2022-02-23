import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="title">Search Robots</h1>
      </Link>
    </div>
  );
};

export default Header;
