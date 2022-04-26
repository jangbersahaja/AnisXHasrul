import styled from "styled-components";
import Image from "next/image";

import { Info } from "../details/info";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 95%;
  max-width: 450px;

  border-radius: 10px;
  overflow: hidden;

  position: relative;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const BG = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 50px;
`;

const Title = styled.p`
  font-size: 18px;
  text-align: center;

  padding: 1px 5px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const Anis = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "MonteCarlo", cursive;
  font-size: 70px;
  text-align: center;
  color: #827862;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

const Hasrul = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "MonteCarlo", cursive;
  font-size: 70px;
  text-align: center;
  color: #827862;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);

  margin-left: -30px;
`;

const And = styled.p`
  margin: 10px;
  font-size: 20px;
  text-align: center;
  position: relative;

  &::before {
    content: " ";
    height: 1px;
    width: 50px;
    background: black;
    display: block;
    position: absolute;
    top: 50%;
    left: 50px;
  }

  &::after {
    content: " ";
    height: 1px;
    width: 50px;
    background: black;
    display: block;
    position: absolute;
    top: 50%;
    right: 50px;
  }
`;

const DayTime = styled.p`
  font-size: 18px;
  padding: 2px 10px;
  border-top: 1px solid;
  border-bottom: 1px solid;

  text-transform: uppercase;

  letter-spacing: 1px;
`;

const Intro = () => {
  return (
    <Wrapper>
      <BG>
        <Image
          src={require("/src/img/background.jpg")}
          layout="fill"
          objectFit="cover"
          alt="Gambar Profil Reezal Merican"
        />
      </BG>
      <TextWrapper>
        <Title>
          Jemputan <br />
          {Info.Title}
        </Title>
        <Center>
          <Anis>{Info.SN.Main}</Anis>
          <And>Dan</And>
          <Hasrul>{Info.SN.Partner}</Hasrul>
        </Center>
        <DayTime>
          {Info.Date.Date} {Info.Date.Month} {Info.Date.Year}
        </DayTime>
      </TextWrapper>
    </Wrapper>
  );
};

export default Intro;
