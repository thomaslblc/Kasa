import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="inner">
      <div className="error_container">
        <h1 className="error_number">404</h1>
        <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
