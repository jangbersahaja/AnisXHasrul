import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { BsPinMapFill, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { SiWaze, SiGooglemaps } from "react-icons/si";
import { MdClose } from "react-icons/md";

import { Info } from "../details/info";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;
  opacity: ${(props) => props.opacity};
  transition: all ease-in-out 300ms;

  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #9dbaa1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  width: 100%;
  gap: 20px;

  position: fixed;
  bottom: 0;

  z-index: 2;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, #9dbaa1, #69976b, #69976b, #9dbaa1);
  color: #fff;

  height: 50px;
  width: 50%;

  gap: 20px;

  cursor: pointer;
`;

const Drive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  overflow: hidden;

  gap: 20px;
  max-width: 600px;
  width: 90%;

  position: absolute;
  bottom: ${(props) => props.display};

  transition: all ease-in-out 500ms;
`;

const Application = styled.div`
  width: 100%;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Map = styled.div`
  width: 100%;
  height: 200px;

  position: relative;
`;

const Address = styled.p`
  font-size: 16px;
  padding: 0 20px;

  text-align: center;
`;

const Venue = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 0 20px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, #9dbaa1, #69976b, #69976b, #9dbaa1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;

  padding: 20px 40px;
  gap: 20px;
  max-width: 600px;
  width: 90%;

  position: absolute;
  bottom: ${(props) => props.display};

  transition: all ease-in-out 500ms;
`;

const ContactApp = styled.div`
  display: flex;

  gap: 20px;

  cursor: pointer;
`;

const Whatsapp = styled(BsWhatsapp)`
  font-size: 20px;
  &:hover {
    opacity: 0.5;
  }
`;

const Telephone = styled(BsTelephone)`
  font-size: 20px;
  &:hover {
    opacity: 0.5;
  }
`;

const Link = styled.a`
  color: white;
`;

const CloseIcon = styled(MdClose)`
  color: #fff;
  font-size: 25px;
`;

const Nav = () => {
  const [openLocation, setOpenLocation] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const setLocation = () => {
    setOpenLocation(!openLocation);
    if (openContact === true) {
      setOpenContact(false);
    }
  };

  const setContact = () => {
    setOpenContact(!openContact);
    if (openLocation === true) {
      setOpenLocation(false);
    }
  };

  const ContactMe = Info.Contact;

  return (
    <>
      <Wrapper>
        <Box onClick={setContact}>
          {openContact === true ? (
            <CloseIcon />
          ) : (
            <>
              <BsTelephone />
              <Title>Hubungi</Title>
            </>
          )}
        </Box>
        <Contact display={openContact === false ? "-200px" : "100px"}>
          {ContactMe.map((person, i) => (
            <Application key={i}>
              <Title>{person.Name}</Title>
              <ContactApp>
                <Link
                  href={`http://wasap.my/+6${person.Phone}/Majlis+Perkahwinan+Anis+&+Hasrul`}
                  target="_blank"
                >
                  <Whatsapp />
                </Link>
                <Link href={`tel:${person.Phone}`}>
                  <Telephone />
                </Link>
              </ContactApp>
            </Application>
          ))}
        </Contact>
        <Box onClick={setLocation}>
          {openLocation === true ? (
            <CloseIcon />
          ) : (
            <>
              <BsPinMapFill />
              <Title>Lokasi</Title>
            </>
          )}
        </Box>
        <Drive display={openLocation === false ? "-400px" : "100px"}>
          <Map>
            <Image
              src={require("/src/img/map.png")}
              layout="fill"
              objectFit="cover"
              alt="Gambar Profil Reezal Merican"
            />
          </Map>
          <Venue>{Info.Location.Venue}</Venue>
          <Address>
            {Info.Location.Address1}
            <br />
            {Info.Location.Address2}
          </Address>
          <Application>
            <Box as="a" href={Info.Location.Waze} target="_blank">
              <SiWaze />
              <Title>Waze</Title>
            </Box>
            <Box as="a" href={Info.Location.Google} target="_blank">
              <SiGooglemaps />
              <Title>Google Map </Title>
            </Box>
          </Application>
        </Drive>
      </Wrapper>
      <Container opacity={openLocation || openContact === true ? "0.4" : "0"} />
    </>
  );
};

export default Nav;
