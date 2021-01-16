import React from "react";
import Footer from "./Footer";
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
}

const Cart: React.FC<Items> = ({ cartItems }) => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Cart";
  }

  return (
    <>
      <Div>
        <h1>Cart</h1>
      </Div>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
