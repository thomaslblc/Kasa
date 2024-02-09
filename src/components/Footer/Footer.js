import logo from '../../img/logo.svg';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="inner">
        <img src={logo} alt="Logo Kasa" />
        <div>
          <p>&copy; 2020 Kasa.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
