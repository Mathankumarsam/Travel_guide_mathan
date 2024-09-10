import styled from "styled-components";
import { Helmet } from "react-helmet";
import Header from "./includes/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("https://traveller.talrop.works./api/v1/places/")
      .then((Response) => {
        setPlaces(Response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  const renderPlaces = () => {
    return places.map((place) => (
      <PlaceCard>
        <PLaceCardLInk to={`/place/${place.id}`} >
          <PlaceImage src={place.image} alt="image" />
          <BottomContainer>
            <PlaceTitle>{place.name}</PlaceTitle>
            <LocationDiv>
              <LocIcon
                src={require("../../assets/images/place.svg").default}
                alt="loc_icon"
              />
              <LocName>{place.location}</LocName>
            </LocationDiv>
          </BottomContainer>
        </PLaceCardLInk>
      </PlaceCard>
    ));
  };
  return (
    <>
      <Helmet>
        <title>Places | Travel Guide</title>
      </Helmet>
      <Header />
      <TopContainer>
        <h1>Welcome </h1>
        <p>Find the perfect place to visit today</p>
      </TopContainer>
      <PlaceContainer>{renderPlaces()}</PlaceContainer>
    </>
  );
}

const TopContainer = styled.div`
  width:90%;
  margin: 100px auto 0;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  p{
    font-size: 22px;
    line-height: 1.5;
    color: #dfdfe2;
  }
`;
const PlaceContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 50px auto 0;
`;

const PlaceCard = styled.li`
  width: 23.5%;
  margin-right: 2%;
  margin-bottom: 25px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const PLaceCardLInk = styled(Link)`
  display: block;
  appearance: none;
`;

const PlaceImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const BottomContainer = styled.div`
  padding: 10px 15px;

`;

const PlaceTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LocIcon = styled.img`
  margin-right: 10px;
`;

const LocName = styled.span`
  font-size: 18px;
`;

export default Places;
