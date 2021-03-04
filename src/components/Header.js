import { Link } from "react-router-dom";
import logo from "../images/logo1.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Rick and Morty logo" />
        </Link>
      </div>
    </>
  );
};

export default Header;
