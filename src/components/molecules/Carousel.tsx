import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import girl from "../../images/photoGirl.png";
const Container = styled.div`
  //border: 2px solid pink; /* BORDER TEST*/
  width: 100%;

  //height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  font-family: "Panchang", sans-serif;
  font-size: 32px;

  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.verylight}; /* BORDER TEST*/
  z-index: 2;
  padding: 10px;
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

const Carousel = (props: Props) => {
  return (
    <Container>
      <StyledCarouselProvider
        visibleSlides={2.5}
        totalSlides={5}
        step={3}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        infinite
      >
        <StyledSlider>
          <Slide index={0}>
            <Img src={girl}></Img>
          </Slide>
          <Slide index={1}>
            <Img src={girl}></Img>
          </Slide>
          <Slide index={2}>
            <Img src={girl}></Img>
          </Slide>
          <Slide index={3}>
            <Img src={girl}></Img>
          </Slide>
          <Slide index={4}>
            <Img src={girl}></Img>
          </Slide>
        </StyledSlider>
      </StyledCarouselProvider>
    </Container>
  );
};

export default Carousel;
