import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;

  background-color: whitesmoke;

  z-index: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 700px;

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

  height: 350px;
  width: 350px;

  border-radius: 50%;
  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
`;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Canvas>
          <Image
            src={require("/src/img/majlis/DIL_0422 2.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Floral Background"
          />
        </Canvas>
      </Wrapper>
    </Container>
  );
};

export default Main;
