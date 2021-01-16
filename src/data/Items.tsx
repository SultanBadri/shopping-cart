import React from "react";
import ShopItem from "./shopItem";
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
    {
      name: "Mars",
      src: mars,
      price: "$5^11",
    },
    {
      name: "Jupiter",
      src: jupiter,
      price: "$5^11",
    },
    {
      name: "Saturn",
      src: saturn,
      price: "$5^11",
    },
    {
      name: "Uranus",
      src: uranus,
      price: "$5^11",
    },
    {
      name: "Neptune",
      src: neptune,
      price: "$5^11",
    },
    {
      name: "Pluto",
      src: pluto,
      price: "$5^11",
    },
  ];

  return (
    <Div>
      {planets.map((planet) => (
        <ShopItem
          name={planet.name}
          src={planet.src}
          price={planet.price}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </Div>
  );
};

export default Items;
