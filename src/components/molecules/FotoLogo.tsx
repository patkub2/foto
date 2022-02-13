import styled from "styled-components";
type Props = {};

const Img = styled.div`
  font-family: "Panchang", sans-serif;
  font-size: 32px;
  //border: 1px solid red; /* BORDER TEST*/

  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid red; /* BORDER TEST*/
    font: normal normal normal 64px/85px Panchang;
  }
`;
const FotoLogo = (props: Props) => {
  return <Img>FØ.TO</Img>;
};

export default FotoLogo;
