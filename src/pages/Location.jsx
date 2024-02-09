import { Navigate, useParams } from "react-router-dom";
import Logements from "./../data/logements.json";
import Star from "../components/Star/Star";
import Collapse from "../components/Collapse/Collapse";
import Carousel from "../components/Carousel/Carousel";

function Location() {
  const id = useParams().id;
  let location;
  Logements.forEach((logement) => {
    if (id === logement.id) {
      location = logement;
    }
  });
  if (location) {
    return (
      <div className="inner">
        <div className="location_page_container">
          <Carousel images={location.pictures} />
          <div className="location_infos">
            <div className="location_infos_bloc_1">
              <h1>{location.title}</h1>
              <p>{location.location}</p>
              <div className="location_tags">
                <ul>
                  {location.tags.map((tag) => {
                    return <li key={tag}>{tag}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="location_infos_bloc_2">
              <div className="location_owner">
                <p>{location.host.name}</p>
                <div className="owner_photo">
                  <img src={location.host.picture} alt={location.host.name} />
                </div>
              </div>
              <div className="location_ratings">
                <Star rating={location.rating} />
              </div>
            </div>
          </div>
          <div className="location_collapses">
            <Collapse title="Description" content={location.description} />
            <Collapse
              title="Équipements"
              content={location.equipments.map((equipment, i) => {
                return <p key={i}>{equipment}</p>;
              })}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/404" />;
  }
}

export default Location;
