import Cards from "../../components/About/Cards";
import Texto from "../../components/About/Texto";
import "../../components/About/About.css";

const AboutPage = () => {
  return (
    <div id="ContenedorAbout" className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
          <Texto />
          </div>
          <div className="col-8">
          <Cards />
          </div>
        </div>
      </div>
   
  );
};

export default AboutPage;
