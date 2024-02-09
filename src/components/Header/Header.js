import logo from '../../img/logo.svg';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="inner">
        <div className="navbar">
          <Link to="/"> <img src={logo} alt="Logo Kasa" /></Link>
          <ul>
            <li><NavLink to="/" className={({ isActive }) =>
              isActive ? "active" : ""
            }>Accueil</NavLink></li>

            <li><NavLink to='/a_propos' className={({ isActive }) =>
              isActive ? "active" : ""
            }>À Propos</NavLink></li>
          </ul>
        </div>
       
      </div>
    </header>
  );
}

export default Header;