import CarouselIndex from "../../components/Carousel/CarouselIndex";
import Comentarios from "../../components/Comentarios/Comentarios";
import CardPlanes from "../../components/Planes/CardPlanes";
import Publicidad from "../../components/Publicidad/Publicidad";


const IndexPages = () => {
  return (
    <>
      <CarouselIndex /> 
      <CardPlanes />
      <Comentarios />
      <Publicidad />
    </>
  );
};

export default IndexPages;
