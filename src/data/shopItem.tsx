import React from "react";
import styled from "styled-components";

const ItemDiv = styled.div`
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s ease;
  padding: 20px;
  border-radius: 8px;
  &:hover {
    border: 1px solid #1b7fbd;
  }

  h2 {
    margin: 0.5rem 0;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;

interface ItemKeys {
  name: string;
  src: string;
  price: string;
}

const shopItem: React.FC<ItemKeys> = ({ name, src, price }) => {
  const handleClick = () => {
    alert("added to cart");
  };

  return (
    <ItemDiv onClick={handleClick}>
      <div>
        <h2>
          {name}, {price}
        </h2>
        <img src={src} alt={name} />
      </div>
    </ItemDiv>
  );
};

export default shopItem;
