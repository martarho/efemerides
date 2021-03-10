import React from "react";
import styled from "styled-components";

const Menu = (props: { isOpen: boolean }) => {
  const { isOpen } = props;
  return (
    <StyledMenu open={isOpen}>
      <a href="/">
        <span role="img" aria-label="Home">
        </span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="Configuration">
        </span>
        Configuration
      </a>
    </StyledMenu>
  );
};


export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${({ theme }) => theme.primaryColor};
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  height: 10rem;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease -in -out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};


  @media(max - width: ${({ theme }) => theme.mobile}) {
      width: 100 %;
  }

  a {
      font-size: 1rem;
      text-transform: uppercase;
      padding: 2rem 2rem;
      font-weight: bold;
      letter-spacing: 0.2rem;
      color: ${({ theme }) => theme.secondaryLight};
      text-decoration: none;
      transition: color 0.3s linear;

      @media(max - width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
  }

    &: hover {
    color: ${({ theme }) => theme.secondaryDark};
}
  }
`;


export default Menu;
