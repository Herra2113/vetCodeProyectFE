import CarouselIndex from "../../components/Carousel/CarouselIndex";
import Comentarios from "../../components/Comentarios/Comentarios";
import CardPlanes from "../../components/Planes/CardPlanes";
import WorkWithUs from "../../components/WorkWithUs/WorkWithUs";
import Publicidad from "../../components/Publicidad/Publicidad";
import ProductosDeseados from "../../components/ProductosDeseados/ProductosDeseados";




const IndexPages = () => {
  return (
    <>
      <CarouselIndex />
      <CardPlanes />
      <Publicidad />
      <ProductosDeseados />
      <Comentarios />
      <WorkWithUs />
    </>
  );
};

export default IndexPages;
