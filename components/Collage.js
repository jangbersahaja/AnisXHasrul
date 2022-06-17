import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(140vh - 50px);

  padding-bottom: 100px;

  background-color: whitesmoke;

  z-index: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  width: 100%;

  overflow: hidden;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Canvas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  overflow: hidden;

  height: 31%;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
`;

const Collage = () => {
  return (
    <Container>
      <Wrapper>
        <Canvas>
          <Image
            src={require("/src/img/majlis/DIL_0383.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Floral Background"
          />
        </Canvas>
        <Canvas>
          <Image
            src={require("/src/img/majlis/DIL_9112.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Floral Background"
          />
        </Canvas>
        <Canvas>
          <Image
            src={require("/src/img/majlis/DIL_0573.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Floral Background"
          />
        </Canvas>
      </Wrapper>
    </Container>
  );
};

export default Collage;
