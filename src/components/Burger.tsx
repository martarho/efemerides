import React from "react";
import styled from "styled-components";

const Burger = (props: { isOpen: boolean; setOpen: any }) => {
    const { isOpen, setOpen } = props;
    return (
        <StyledBurger open={isOpen} onClick={() => setOpen(!isOpen)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.secondaryColor};;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(20px)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    :nth-child(3)  {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;


export default Burger;
