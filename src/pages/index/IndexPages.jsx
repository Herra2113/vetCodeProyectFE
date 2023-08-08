import CarouselIndex from "../../components/Carousel/CarouselIndex";
import Comentarios from "../../components/Comentarios/Comentarios";
import CardPlanes from "../../components/Planes/CardPlanes";
import Profesionales from "../../components/Profesionales/Profesionales";
import Publicidad from "../../components/Publicidad/Publicidad";


const IndexPages = () => {
  return (
    <>
      <CarouselIndex /> 
      <CardPlanes />
      <Profesionales />
      <Publicidad />
      <Comentarios />
    </>
  );
};

export default IndexPages;
