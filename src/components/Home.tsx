import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Space from "../images/space.jpeg";

const HeroDiv = styled.div`
  margin-top: -2rem;
  min-height: 50vh;
  background: url(${Space}) center;
  background-size: cover;

  h1 {
    letter-spacing: 2px;
    font-size: 3rem;
    text-align: center;
    color: white;
    padding-top: 22vh;
  }
`;

const ServiceDiv = styled.div`

  h2 {
    text-align: center;
    font-size: 2rem;
    color: #595cae;
  }

  h2:after {
    content: "";
    position: absolute";
    height: 3px;
    width: 25px;
    background: #f9ed69;
  }
`;

const Home = () => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Home";
  }

  // const [picture, setPicture] = useState();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://api.nasa.gov/planetary/apod?api_key=LCt4YpWK4MZnYiOujvjl68t3qOvIpGiQxHESaIPC"
  //   );
  //   const data = await response.json();
  //   const image = data["url"];
  //   console.log(image);
  //   setPicture(image);
  // };

  return (
    <>
      <HeroDiv>
        <h1>The Billionaire's Planet Shop</h1>
      </HeroDiv>
      <ServiceDiv>
        <h2>Our Services</h2>
      </ServiceDiv>
    </>
  );
};

export default Home;
