import React from "react";
import ShopItem from "./ShopItem";
import styled from "styled-components";
import theMoon from "../images/moon.jpg";
import mercury from "../images/mercury.png";
import venus from "../images/venus.jpg";
import mars from "../images/mars.jpg";
import jupiter from "../images/jupiter.jpg";
import saturn from "../images/saturn.jpg";
import uranus from "../images/uranus.jpg";
import neptune from "../images/neptune.jpg";
import pluto from "../images/pluto.jpg";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

interface CartItems {
  cartItems: never[];
  setCartItems: React.Dispatch<any>;
}

interface PlanetProps {
  name: string;
  src: string;
  price: string;
}

const Items: React.FC<CartItems> = ({ cartItems, setCartItems }) => {
  const planets: Array<PlanetProps> = [
    {
      name: "The moon",
      src: theMoon,
      price: "$100^5",
    },
    {
      name: "Mercury",
      src: mercury,
      price: "$100^6",
    },
    {
      name: "Venus",
      src: venus,
      price: "$100^7",
    },
    {
      name: "Mars",
      src: mars,
      price: "$100^6.5",
    },
    {
      name: "Jupiter",
      src: jupiter,
      price: "$100^11",
    },
    {
      name: "Saturn",
      src: saturn,
      price: "$100^10",
    },
    {
      name: "Uranus",
      src: uranus,
      price: "$100^8",
    },
    {
      name: "Neptune",
      src: neptune,
      price: "$100^9",
    },
    {
      name: "Pluto",
      src: pluto,
      price: "$100^4.5",
    },
  ];

  return (
    <Div>
      {planets.map((planet, i) => (
        <ShopItem
          key={i}
          planet={planet}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </Div>
  );
};

export default Items;
