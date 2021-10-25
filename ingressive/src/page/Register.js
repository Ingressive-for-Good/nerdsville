import React from "react";
import styled from "styled-components";
import bgImg from "../assets/images/med.jpg";
import RegisterForm from "../components/RegisterForm";
import Main from "../components/Main";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <RegisterForm />
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default Register;