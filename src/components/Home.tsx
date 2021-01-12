import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;

const Home = () => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Home";
  }

  return <H1>Home</H1>;
};

export default Home;
