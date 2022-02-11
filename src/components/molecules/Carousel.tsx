import styled from "styled-components";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import girl from "../../images/photoGirl.png";
import CarouselElement from "./../atoms/CarouselElement";
const Container = styled.div`
  //border: 2px solid pink; /* BORDER TEST*/
  width: 100%;

  //height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  //border: 1px solid blue; /* BORDER TEST*/

  width: 100%;
  height: 100%;
`;

const StyledSlider = styled(Slider)`
  // border: 1px solid green; /* BORDER TEST*/
  width: 100%;
  max-height: 100%;
`;

type Props = {};
interface User {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Carousel = (props: Props) => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setData(response.data);
        console.log(data[1].image);
      });
  }, []);

  return (
    <Container>
      <StyledCarouselProvider
        visibleSlides={3}
        totalSlides={5}
        step={3}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        infinite
      >
        <StyledSlider>
          {data.map((item) => (
            <Slide index={item.id}>
              <CarouselElement image={item.image} />
            </Slide>
          ))}
        </StyledSlider>
      </StyledCarouselProvider>
    </Container>
  );
};
// <button onClick={() => console.log(FetchAPI)}>test</button>
export default Carousel;
