import Carousel from "react-bootstrap/Carousel";
import "../../styles/navStyle.css";
export const CarouselMachine = () => {
  return (
    <Carousel fade className="imgs">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.coolblue.nl/840x473/content/cf09a42b200eafacf1a90a21c5d5cea5"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images2.alphacoders.com/827/827248.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.abcnews.com/images/Lifestyle/unloading-washing-machine-gty-mem-180426_hpMain_16x9_1600.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
