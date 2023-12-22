import Banner from "../components/Banner/Banner";
import banner from "./../img/Banner_2.jpg";

function About() {
  return (
    <div>
      <div>
        <Banner img={banner} title=""/>
      </div>
      <div class="inner">
        <div class="tiles">
          <div class="tile">
            <p>Fiabilité</p>
            <i class="fa-solid fa-chevron-up"></i>
          </div>
          <div class="tile">
            <p>Respect</p>
            <i class="fa-solid fa-chevron-up"></i>
          </div>
          <div class="tile">
            <p>Service</p>
            <i class="fa-solid fa-chevron-up"></i>
          </div>
          <div class="tile">
            <p>Sécurité</p>
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
