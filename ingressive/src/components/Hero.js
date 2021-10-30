import React from "react";
import styled from "styled-components";
import HeroImage from "../images/HeroImage.png";
import Image from "../images/Image.png";
import { hero } from "../data";

const Hero = () => {
  return (
    <BannerContainer>
      <BannerOverlay style={{ backgroundImage: `url(${HeroImage})` }}>
        <BannerContent>
          <div className="image">
            <img src={Image} alt="" />
          </div>
          <div className="details">
            <h4>{hero.greet}</h4>
            <h1>{hero.name}</h1>
            <div className="description">{hero.about}</div>
            <a href="#work">work with me</a>
          </div>
        </BannerContent>
      </BannerOverlay>
    </BannerContainer>
  );
};

export default Hero;

const BannerContainer = styled.div`
  height: 900px;
  position: relative;
  background: #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.85;
`;

const BannerOverlay = styled.div``;

const BannerContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 950px;
  padding: 0 6rem;
  margin-top: -100px;
  color: #fff;
  justify-content: space-around;
  position: relative;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    padding: 6rem 2rem;
    justify-content: center;
  }
  .image {
    margin-bottom: 20px;

    img {
      width: 435px;
      height: 540px;
      object-fit: cover;
      @media (max-width: 1024px) {
        width: 360px;
        height: 470px;
      }
      @media (max-width: 767px) {
        width: 170.78px;
        height: 212px;
      }
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
      margin-right: 3rem;
    }

    @media (max-width: 767px) {
      align-items: center;
      text-align: center;
      margin-right: 0;
    }
    h4 {
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      @media (max-width: 767px) {
        font-size: 19px;
        line-height: 23px;
        margin-bottom: 0.5rem;
      }
    }
    h1 {
      font-family: Playfair Display;
      font-weight: bold;
      font-size: 80px;
      line-height: 107px;
      @media (max-width: 767px) {
        font-size: 40px;
        line-height: 53.32px;
        margin-bottom: 1rem;
      }
    }
    .description {
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      width: 501px;
      line-height: 33.5px;
      margin-bottom: 2rem;
      @media (min-width: 1440px) {
        width: 601px;
      }
      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 25.13px;
        width: 100%;
      }
    }
    a {
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      width: 196px;
      padding: 10px;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      color: #ffca47;
      border: 2px solid #ffca47;
    }
  }
`;
