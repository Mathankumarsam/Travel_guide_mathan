import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../includes/Header";
import { Helmet } from "react-helmet";
import axios from "axios";
import styled from "styled-components";

function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState({
    name: "",
    gallery: [],
    category_name: "",
    location: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`https://traveller.talrop.works./api/v1/places/view/${id}`)
      .then((Response) => {
        setPlace(Response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{place.name}</title>
      </Helmet>
      <Header />
      <MainContainer>
        <Title>{place.name}</Title>
        <InfoContainer>
          <CategoryName>{place.category_name}</CategoryName>
          <LocationContainer>
            <LocationIcon src={require("../../components/assets/images/place.svg").default} alt="loc_icon" />
            <LocationName>{place.name}</LocationName>
          </LocationContainer>
        </InfoContainer>
        <ImageContainer>
          <ImageLiContainer>
            <Image src={place.image} alt="Main Image" />
          </ImageLiContainer  >
          {place.gallery.map((image) => (
            <ImageLiContainer >
              <Image src={image.image} alt="Image no:" />
            </ImageLiContainer>
          ))}
        </ImageContainer>
        <DeatailsContainer>
          <SubHeading>{place.location}</SubHeading>
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
const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const CategoryName = styled.span`
  border: 1px solid #9c9c9c;
  color: #9c9c9c;
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-right: 15px;
`;
const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LocationIcon = styled.img`
  margin-right: 5px;
`;
const LocationName = styled.span`
  color: #9c9c9c;
  font-weight: bold;
  font-size: 14px;
`;
const ImageContainer = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 35px;
`;
const ImageLiContainer = styled.li`
  &:first-child {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const DeatailsContainer = styled.div``;
const SubHeading = styled.span`
  font-size: 28px;
  margin-bottom: 20px;
`;
const PlaceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6em;
`;

export default Place;
