import React, { useState } from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  padding: 20px;
  margin: 0 auto;

  h2 {
    margin: 0.5rem 0;
    text-align: center;
  }

  div {
    width: 90%;
    margin: 0 auto;
  }

  .quantity {
    width: 50%;
    margin: 1rem auto;
    .decrease,
    .increase {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.2rem;
    }

    input {
      text-align: center;
      width: 50%;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .add-to-cart {
    outline: none;
    border: none;
    padding: 8px 32px;
    border-radius: 25px;
    background: transparent;
    border: 2px solid #1b7fbd;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s ease;
    width: 100%;
    &:hover {
      background: #1b7fbd;
      color: white;
    }
  }
`;

interface ItemKeys {
  name: string;
  src: string;
  price: string;
  cartItems: never[];
  setCartItems: React.Dispatch<any>;
}

const ShopItem: React.FC<ItemKeys> = ({
  name,
  src,
  price,
  cartItems,
  setCartItems,
}) => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const increment = () => setQuantity(quantity + 1);

  const addToCart = () => {
    setCartItems((prev: any) => [...prev, name]);
  };

  const inputChange = () => {
    console.log("Order changed");
  };

  return (
    <ItemDiv>
      <h2>
        {name}, {price}
      </h2>
      <div>
        <img src={src} alt={name} height="200px" width="200px" />
      </div>
      <div className="quantity">
        <button className="decrease" onClick={decrement}>
          -
        </button>
        <input type="number" defaultValue={quantity} onChange={inputChange} />
        <button className="increase" onClick={increment}>
          +
        </button>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        Add to cart
      </button>
    </ItemDiv>
  );
};

export default ShopItem;
