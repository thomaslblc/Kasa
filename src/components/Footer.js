import logo from '../img/logo.svg';

function Footer() {
  return (
    <footer>
    <div className="inner">
      <img src={logo} alt="Logo Kasa" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
    </footer>
  );
}

export default Footer;
