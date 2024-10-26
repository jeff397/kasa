import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" />
        {/* Logo */}
      </Link>
      <Link to="/">Accueil</Link>
      <Link to="/About">A propos</Link>
    </nav>
  );
}

export default Header;
