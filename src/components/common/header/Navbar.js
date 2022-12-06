import "./Navbar.css";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const underline = useLocation().pathname
  console.log(underline)
  return (
    <nav>
      <Logo />
      <ul className="liste">
        <li className="items">
          <Link to="/" className={underline === '/' ? 'active' : ''}>Accueil </Link>
        </li>
        <li className="items">
          <Link to="/about"className={underline === '/about' ? 'active' : ''} >A propos</Link>
        </li>
      </ul>
    </nav>
  );
}