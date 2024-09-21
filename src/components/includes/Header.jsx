import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Logo
        src={require("../../components/assets/images/logo.svg").default}
        alt="Logo"
      />
      <Button>Login</Button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  display: block;
`;

const Button = styled.button`
  border: none;
  padding: 13px 45px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #046bf7;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export default Header;
