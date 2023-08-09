import CarouselIndex from "../../components/Carousel/CarouselIndex";
import Comentarios from "../../components/Comentarios/Comentarios";
import CardPlanes from "../../components/Planes/CardPlanes";
import Publicidad from "../../components/Publicidad/Publicidad";
import ProductosDeseados from "../../components/ProductosDeseados/ProductosDeseados";

const IndexPages = () => {
  return (
    <>
      <CarouselIndex />
      <CardPlanes />
      <ProductosDeseados />
      <Comentarios />
      <Publicidad />
    </>
  );
};

export default IndexPages;
