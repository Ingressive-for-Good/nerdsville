import React from "react";
import styled from "styled-components";
import Rectangle8 from "../images/Rectangle 8.png";
import Rectangle9 from "../images/Rectangle 9.png";
import Rectangle14 from "../images/Rectangle 14.png";
import Rectangle10 from "../images/Rectangle 10.png";
import Rectangle11 from "../images/Rectangle 11.png";
import Rectangle12 from "../images/Rectangle 12.png";
import Rectangle13 from "../images/Rectangle 13.png";

const Work = () => {
  return (
    <WContainer>
      <div className="header">
        <div className="heading">My Work</div>
        <div className="sub-heading">
          <h4 className="active">All</h4>
          <h4>Dessert</h4>
          <h4>Appetizer</h4>
          <h4>Restaurant</h4>
          <h4>Dinner</h4>
          <h4>Drinks</h4>
          <h4>Confectionary</h4>
        </div>
        <div className="select-button">
          <select>
            <option value="all">All</option>
            <option value="dessert">Dessert</option>
            <option value="appetizer">Appetizer</option>
            <option value="restaurant">Restaurant</option>
            <option value="dinner">Dinner</option>
            <option value="drinks">Drinks</option>
            <option value="confectionary">Confectionary</option>
          </select>
        </div>
      </div>
      <div className="content">
        <div className="grid">
          <div className="grid-items one">
            <img src={Rectangle8} alt="grid-pics" />
          </div>
          <div className="grid-items two">
            <img src={Rectangle9} alt="grid-pics" />
          </div>
          <div className="grid-items three">
            <img src={Rectangle14} alt="grid-pics" />
          </div>
          <div className="grid-items four">
            <img src={Rectangle10} alt="grid-pics" />
          </div>
          <div className="grid-items five">
            <img src={Rectangle11} alt="grid-pics" />
          </div>
          <div className="grid-items six">
            <img src={Rectangle12} alt="grid-pics" />
          </div>
          <div className="grid-items seven">
            <img src={Rectangle13} alt="grid-pics" />
          </div>
        </div>
      </div>
    </WContainer>
  );
};

export default Work;

const WContainer = styled.div`
  background: #000000;
  color: #fff;
  background-size: cover;
  position: relative;
  z-index: 0;
  display: grid;
  align-items: center;
  padding: 4em 0;
  transition: 0.3s;
  text-align: center;
  .header {
    display: flex;
    flex-direction: column;
    padding: 0 60px;
    margin-bottom: 60px;
    @media (max-width: 768px) {
      padding: 0;
    }
    @media (max-width: 568px) {
      padding: 0;
    }
    .heading {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 48px;
      color: #ffca47;
      margin-bottom: 50px;
    }
    .sub-heading {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 80px;
      text-transform: uppercase;
      font-family: Rubik;
      font-size: 21px;
      line-height: 159.6%;
      color: #e0e0e0;
      cursor: pointer;
      @media (max-width: 768px) {
        padding: 0 40px;
        font-size: 18px;
      }
      @media (max-width: 568px) {
        display: none;
      }
      h4.active {
        color: #ffca47;
      }
    }
    .select-button {
      display: none;
      @media (max-width: 568px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 241px;
        height: 56px;
        padding: 0 15px;
        margin: 0 auto;
        border: 2px solid #ffffff;
      }
      select {
        width: 100%;
        background: none;
        outline: 0;
        border: 0;
        color: #fff;
        font-family: Rubik;
        font-size: 18px;
        line-height: 159.6%;
        padding: 15px 0;
        option {
          color: #000000;
        }
      }
    }
  }
  .content {
    padding: 0 60px;
    @media (max-width: 568px) {
      padding: 0 20px;
    }
    .grid {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows: auto auto auto;
      @media (max-width: 568px) {
        display: flex;
        flex-direction: column;
      }
      .grid-items {
        margin: 5px;
      }
      .one {
        grid-column: 1;
        grid-row: 1 / span 3;
      }
      .two {
        grid-column: 2;
        grid-row: 1;
      }
      .three {
        grid-row: 2 / span 3;
      }
      .four {
        grid-column: 3;
        grid-row: 1 / span 2;
      }
      .five {
        grid-column: 3 / span 4;
        grid-row: 3;
      }
      .six {
        grid-row: 1;
      }
      .seven {
        grid-row: 2;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: 568px) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
