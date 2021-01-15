import React from "react";
import ShopItem from "./shopItem";
import styled from "styled-components";
import theMoon from "../images/moon.jpg";
import mercury from "../images/mercury.png";
import venus from "../images/venus.jpg";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

interface PlanetProps {
  name: string;
  src: string;
  price: string;
}

const Items = () => {
  const planets: Array<PlanetProps> = [
    {
      name: "The moon",
      src: theMoon,
      price: "$5^6",
    },
    {
      name: "Mercury",
      src: mercury,
      price: "$5^10",
    },
    {
      name: "Venus",
      src: venus,
      price: "$5^11",
    },
  ];

  return (
    <Div>
      {planets.map((planet) => (
        <ShopItem name={planet.name} src={planet.src} price={planet.price} />
      ))}
    </Div>
  );
};

export default Items;
