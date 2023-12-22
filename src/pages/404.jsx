import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div class="inner">
      <div class="error_container">
        <h1 class="error_number">404</h1>
        <p class="error_text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
