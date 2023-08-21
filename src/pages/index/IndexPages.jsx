import CarouselIndex from "../../components/Carousel/CarouselIndex";
import Comentarios from "../../components/Comentarios/Comentarios";
import CardPlanes from "../../components/Planes/CardPlanes";
import Profesionales from "../../components/Profesionales/Profesionales";
import Publicidad from "../../components/Publicidad/Publicidad";
import ProductosDeseados from "../../components/ProductosDeseados/ProductosDeseados";
import Footer from "../../components/Footer/Footer";



const IndexPages = () => {
  return (
    <>
      <CarouselIndex />
      <CardPlanes />
      <Profesionales />
      <Publicidad />
      <ProductosDeseados />
      <Comentarios />
    </>
  );
};

export default IndexPages;
