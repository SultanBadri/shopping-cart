import React from "react";
import Footer from "./Footer";
import Items from "../data/Items";
import styled from "styled-components";

const Div = styled.div`
  width: 60%;
  margin: 0 auto;

  h1 {
    margin-top: 3rem;
    text-align: center;
  }
`;

interface Items {
  cartItems: never[];
  setCartItems: React.Dispatch<any>;
}

const Shop: React.FC<Items> = ({ cartItems, setCartItems }) => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Shop";
  }

  return (
    <>
      <Div>
        <h1>Shop</h1>
        <Items cartItems={cartItems} setCartItems={setCartItems} />
      </Div>
      {/* <Footer /> */}
    </>
  );
};

export default Shop;
