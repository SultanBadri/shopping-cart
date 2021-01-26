import React, { useState } from "react";
import ErrorModal from "./Modals/ErrorModal";
import PurchaseModal from "./Modals/PurchaseModal";
import styled from "styled-components";
import { CgShoppingCart } from "react-icons/cg";

const Div = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 420px) {
    width: 80%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
    border-bottom: 3px solid #1b7fbd;
    width: 90%;
  }

  button {
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    padding: 8px 40px;
    border-radius: 4px;
    background: transparent;
    border: 2px solid #1b7fbd;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s ease;
    margin-bottom: 5rem;
    &:hover {
      background: #1b7fbd;
      color: white;
    }
  }
`;

const ItemsContainer = styled.div``;

const ItemDiv = styled.div`
  display: flex;
  margin: 2rem;
  background: #595cae;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin: 0 auto;
    }
  }

  img {
    @media (max-width: 550px) {
      width: 125px;
      height: 125px;
    }
  }

  h3 {
    color: white;
    margin: 0.5rem 0;
    text-align: center;
  }
`;

const Text = styled.div`
  margin-left: 1rem;
`;

interface Items {
  cartItems: any[];
  setCartItems: React.Dispatch<any>;
}

const Cart: React.FC<Items> = ({ cartItems, setCartItems }) => {
  const [empty, setEmpty] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Cart";
  }

  const handlePurchase = () => {
    if (!cartItems.length) {
      setEmpty(true);
    } else {
      setPurchased(true);
      setCartItems([]);
    }
  };

  const totalPrice = () => {
    return cartItems
      .map((cartItem: any) => cartItem.price * cartItem.quantity)
      .reduce((a: number, b: number) => a + b, 0);
  };

  const totalItems = () => {
    return cartItems
      .map((cartItem: any) => cartItem.quantity)
      .reduce((a: number, b: number) => a + b, 0);
  };

  return (
    <>
      <Div>
        <div className="header">
          <h1>
            <CgShoppingCart /> MY CART
          </h1>
          <h3>{totalItems()} Items</h3>
        </div>
        {cartItems.map((item, i) => {
          return (
            <ItemsContainer key={i}>
              <ItemDiv>
                <img
                  src={item.src}
                  alt={item.name}
                  height="200px"
                  width="200px"
                />
                <Text>
                  <h3>{item.name}</h3>
                  <h3>Price: ${item.price}</h3>
                  <h3>Quantity: {item.quantity}</h3>
                </Text>
              </ItemDiv>
            </ItemsContainer>
          );
        })}
        <p style={{ textAlign: "center" }}>Total Price: ${totalPrice()}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      </Div>

      {empty ? <ErrorModal setEmpty={setEmpty} /> : null}
      {purchased ? <PurchaseModal setPurchased={setPurchased} /> : null}
    </>
  );
};

export default Cart;
