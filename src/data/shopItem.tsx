import React, { useState } from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  transition: 0.3s ease;
  padding: 20px;
  border-radius: 8px;

  h2 {
    margin: 0.5rem 0;
  }

  img {
    width: 200px;
    height: 200px;
  }

  button {
    background: none;
    border: none;
    outline: none;
    // font-size: 2rem;
  }

  input {
    text-align: center;
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

  return (
    <ItemDiv>
      <div>
        <h2>
          {name}, {price}
        </h2>
        <img src={src} alt={name} />
        <br />
        <button onClick={decrement}>-</button>
        <input type="number" value={quantity} />
        <button onClick={increment}>+</button>
        <br />
        <button className="add-to-cart" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </ItemDiv>
  );
};

export default ShopItem;
