import React, { useEffect, useState } from "react";
import Header from "./includes/Header";
import { Helmet } from "react-helmet";
import axios from "axios";
import styled from "styled-components";

function Place() {
  const [place, setPlace] = useState({
    name: "",
    gallery: [],
  });

  useEffect(() => {
    axios
      .get("https://traveller.talrop.works./api/v1/places/view/30")
      .then((Response) => {
        setPlace(Response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>{place.name}</title>
      </Helmet>
      <Header />
      <MainContainer>
        <Title>{place.name}</Title>
        <InfoContainer>
          <PlaceType>{place.category_name}</PlaceType>
          <LocationContainer>
            <LocationIcon
              src=""
              alt="loc_icon"
            />
            <LocationName>{place.loacation}</LocationName>
          </LocationContainer>
        </InfoContainer>
        <ImageContainer>
          <ImageLiContainer>
            <Image src={place.image} alt="himalaya" />
          </ImageLiContainer>
          {place.gallery.map((image) => (
            <ImageLiContainer>
              <Image src={image.image} alt="himalaya" />
            </ImageLiContainer>
          ))}
        </ImageContainer>
        <DeatailsContainer>
          <SubHeading></SubHeading>
          <PlaceDescription>{place.description}</PlaceDescription>
        </DeatailsContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  width: 70%;
  margin: 70px auto 0;
`;
const Title = styled.h1``;
const InfoContainer = styled.div``;
const PlaceType = styled.span``;
const LocationContainer = styled.div``;
const LocationIcon = styled.img``;
const LocationName = styled.span``;
const ImageContainer = styled.ul``;
const ImageLiContainer = styled.li``;
const Image = styled.img``;
const DeatailsContainer = styled.div``;
const SubHeading = styled.span``;
const PlaceDescription = styled.p``;



export default Place;
