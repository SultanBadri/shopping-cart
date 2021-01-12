import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;

const Shop = () => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Shop";
  }
  return <H1>Shop</H1>;
};

export default Shop;
