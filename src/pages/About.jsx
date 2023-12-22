import Banner from "../components/Banner/Banner";
import banner from "./../img/Banner_2.jpg";
import Collapse from "../components/Collapse";

function About() {
  return (
    <div>
      <div>
        <Banner img={banner} title=""/>
      </div>
      <div className="inner">
        <div className="tiles">
          < Collapse title="Fiabilité" content="hbifghiuh uifhiguhrhh eehg rh g." />
          <div className="tile">
            <p>Respect</p>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="tile">
            <p>Service</p>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="tile">
            <p>Sécurité</p>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
