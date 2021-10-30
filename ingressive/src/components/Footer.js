import React from "react";
import styled from "styled-components";
import fb from "../images/fb.png";
import lk from "../images/linkedIn.png";
import is from "../images/instagram.png";
import tw from "../images/twitter.png";
import yt from "../images/yt.png";
import spice from "../images/JTSpice.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={spice} alt="footerlogo" />
      <p>Copyright, JTSpice 2020</p>
      <ul>
        <li>
          <img src={lk} alt="lk" />
        </li>
        <li>
          <img src={is} alt="is" />
        </li>
        <li>
          <img src={fb} alt="fb" />
        </li>
        <li>
          <img src={yt} alt="yt" />
        </li>
        <li>
          <img src={tw} alt="tw" />
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-left: 3rem;
  padding-right: 3rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    margin-left: .75rem;
    align-items: center;
  }
`;
