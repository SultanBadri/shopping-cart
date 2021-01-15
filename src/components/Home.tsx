import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Space from "../images/space.jpeg";

const HeroDiv = styled.div`
  min-height: 50vh;
  background: url(${Space}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    letter-spacing: 2px;
    font-size: 3rem;
    text-align: center;
    color: white;
  }

  button {
    outline: none;
    border: none;
    padding: 8px 40px;
    border-radius: 4px;
    background: transparent;
    border: 2px solid #1b7fbd;
    color: white;
    cursor: pointer;
    letter-spacing: 1px;
    transition: 0.3s ease;
    &:hover {
      background: #1b7fbd;
    }
  }
`;

const AboutDiv = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 2rem;
    color: #1b7fbd;
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    right: 25%;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: #595cae;
  }
`;

const AboutP = styled.p`
  text-align: center;
  width: 70%;
  margin: 2rem auto;
`;

const Home = () => {
  const title = document.getElementById("title");
  if (title !== null) {
    title.innerHTML = "Odinzom | Home";
  }

  return (
    <>
      <HeroDiv>
        <h1>The Trillionaire's Planet Shop</h1>
        <Link to="/shop">
          <button>See Shop</button>
        </Link>
      </HeroDiv>
      <AboutDiv>
        <h2>About us</h2>
      </AboutDiv>
      <AboutP>
        Thanks to laws passed by the World Congress in 2092, anyone on Earth is
        legally allowed to buy a planet—but for the right price.
      </AboutP>
    </>
  );
};

export default Home;
