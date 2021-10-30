import React from "react";
import styled from "styled-components";
import Image from "../images/Rectangle 7.png";
import { about } from "../data";

const About = () => {
  return (
    <AboutContainer>
      <img src={Image} alt="" />
      <AboutCap>
        <h1>{about.title}</h1>
        <p>{about.content}</p>
      </AboutCap>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  background: #000;
  display: flex;
  padding-top: 5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #fff;
  @media (max-width: 768px) {
    margin: auto;
    display: flex;
    width: 100%;
    text-align: center;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
    flex-direction: column-reverse;
  }
  img {
    width: 15rem;
    height: 15rem;
    @media (max-width: 768px) {
      width: 20rem;
      height: 20rem;
  }
  }
`;
const AboutCap = styled.span`
  display: flex;
  flex-direction: column;
  display: flex;
  width: 50%;
  padding: 30px;
  @media (max-width: 768px) {
    width: 80%;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 48px;
    color: #ffca47;
  }
  p {
    font-size: 21px;
    font-weight: 400;
  }
`;
