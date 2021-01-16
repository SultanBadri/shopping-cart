import React from "react";
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

const shopItem: React.FC<ItemKeys> = ({
  name,
  src,
  price,
  cartItems,
  setCartItems,
}) => {
  const handleClick = () => {
    alert("Added to your cart!");
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
        <button onClick={handleClick}>Buy Now</button>
      </div>
    </ItemDiv>
  );
};

export default shopItem;
