import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function About() {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="Logo" />
                {/* Logo */}
            </Link>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
        </nav>
    );
}

export default About;
