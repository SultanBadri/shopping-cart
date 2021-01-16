import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: #333;
  position: sticky;
  bottom: 0;
  padding: 0.1rem;
`;

const Footer = () => {
  return (
    <Div>
      <h3>Contact us</h3>
    </Div>
  );
};

export default Footer;
