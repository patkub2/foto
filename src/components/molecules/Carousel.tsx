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
import CarouselElement from "./../atoms/CarouselElement";

import { useMediaQuery } from "react-responsive";
import useFetchAPI from "./../atoms/useFetchAPI";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  max-width: 100%;
  max-height: 120px;
`;

const StyledSlide = styled(Slide)`
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

type Props = {};

const Carousel = (props: Props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  const { dataApi } = useFetchAPI([]);
  const data = dataApi.slice(1, 11);

  return (
    <Container>
      <StyledCarouselProvider
        visibleSlides={isBigScreen ? 10 : 3}
        totalSlides={10}
        step={3}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        infinite
      >
        <StyledSlider>
          {data.map((item) => (
            <StyledSlide index={item.id} key={item.id}>
              <CarouselElement image={item.image} />
            </StyledSlide>
          ))}
        </StyledSlider>
      </StyledCarouselProvider>
    </Container>
  );
};
export default Carousel;
