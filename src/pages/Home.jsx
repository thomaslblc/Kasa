import Banner from "../components/Banner/Banner";
import banner from "./../img/banner.jpg";
import Logements from "./../data/logements.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Banner img={banner} title="Chez vous, partout et ailleurs" />
      </div>
      <div className="inner">
        <div className="home_location_container">
          <div className="location_grid">
            <ul>
              {Logements.map((logement) => {
                return (
                  <li key={logement.id}>
                    <Link className="location_card" to={"/location/" + logement.id}>
                    <img src={logement.cover} alt={logement.title} />
                      <h2>{logement.title}</h2>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
