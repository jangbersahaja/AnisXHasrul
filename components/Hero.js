import styled from "styled-components";
import Image from "next/image";

import { Info } from "../details/info";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(90vh - 50px);

  background-color: whitesmoke;

  z-index: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 100%;
  width: 100%;
  max-width: 700px;

  overflow: hidden;

  position: relative;
`;

const BG = styled.div`
  width: 90%;
  height: 480px;

  align-self: start;

  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;

  background: linear-gradient(0deg, whitesmoke, rgba(250, 250, 250, 0.5));

  padding: 80px 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
`;

const Anis = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "MonteCarlo", cursive;
  font-size: 70px;
  text-align: center;
  color: #827862;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);

  margin-bottom: 30px;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Month = styled.p`
  font-size: 18px;
  text-transform: uppercase;
`;

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <BG>
          <Image
            src={require("/src/img/majlis/DIL_0505.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Floral Background"
          />
        </BG>
        <TextWrapper>
          <Anis>
            {Info.SN.Main} x {Info.SN.Partner}
          </Anis>
          <DateWrapper>
            <Month>
              {Info.Date.Day}, {Info.Date.Date} {Info.Date.Month}{" "}
              {Info.Date.Year}
            </Month>
          </DateWrapper>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;
