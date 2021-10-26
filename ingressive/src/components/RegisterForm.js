import React, { useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from '../assets/images/Logo.png';
import firebaseApp from "../config/firebase-app";

const RegisterForm = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }, [history]);

  return (
    <Container>
      <LogoWrapper>
      <img src={Logo} alt="logo" />
        <h3>
          MalHub
        </h3>
      </LogoWrapper>
      <Form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <FormContainer>
          <Input name="first_name" type="text" placeholder="FirstName"  required  />
          <Status />
        </FormContainer>
        <FormContainer>
        <Input name="last_name" type="text" placeholder="LastName"  required />
          <Status />
        </FormContainer>
        <FormContainer>
        <Input name="email" type="email" placeholder="Email" v required />
          <Status />
        </FormContainer>
        <FormContainer>
        <Input name="password" type="password" placeholder="Password"  required />
          <Status />
        </FormContainer>
        <FormContainer>
        <Input type="password" placeholder="Confrim Password" required />
          <Status />
        </FormContainer>
        <button type="submit">
            Sign Up
        </button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <Link to="/login">Sign In</Link>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    a {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;
  ${Input}:focus + & {
    background: #ffa689;
  }
  ${Input}:invalid + & {
    background: #fe2f75;
  }
  ${Input}:valid + & {
    background: #70edb9;
  }
`;

export default withRouter(RegisterForm);