import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 60%;
  margin: 0 auto;

  h1 {
    margin-top: 3rem;
    text-align: center;
  }

  button {
    outline: none;
    border: none;
    padding: 8px 40px;
    border-radius: 4px;
    background: transparent;
    border: 2px solid #1b7fbd;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s ease;
    &:hover {
      background: #1b7fbd;
      color: white;
    }
  }
`;

interface Items {
  cartItems: never[];
  setCartItems: React.Dispatch<any>;
}

const Cart: React.FC<Items> = ({ cartItems, setCartItems }) => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Cart";
  }

  console.log(cartItems);

  const handlePurchase = () => {
    if (!cartItems.length) return alert("You have nothing in your cart");
    setCartItems([]);
    alert("Thank you for your purchase!");
  };

  return (
    <>
      <Div>
        <h1>My cart</h1>
        <ul>
          {cartItems.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      </Div>
    </>
  );
};

export default Cart;
