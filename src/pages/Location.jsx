import { useParams } from "react-router-dom";
import Logements from "./../data/logements.json";
import Star from "./../components/Star"

function Location() {
  const id = useParams().id;
  let location;
  Logements.forEach((logement) => {
    if (id === logement.id) {
      location = logement;
    }
  });
  return (
    <div className="inner">
      <div className="location_page_container">
        <img src={location.cover} alt="#" />
        <div className="location_infos">
          <div className="location_name">
            <h1>{location.title}</h1>
            <p>{location.location}</p>
          </div>
          <div className="location_owner">
            <p>{location.host.name}</p>
            <div className="owner_photo">
              <img src={location.host.picture} alt={location.host.name} />
            </div>
          </div>
        </div>
        <div className="location_tags_and_rating">
          <div className="location_tags">
            <ul>
              {location.tags.map((tag) => {
                return <li key={tag}>{tag}</li>;
              })}
            </ul>
          </div>
          <div className="location_ratings">
            <Star rating={location.rating} />
          </div>
        </div>
        <div className="location_collapses">
          <div className="tile">
            <p>Description</p>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="tile">
            <p>Équipements</p>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
