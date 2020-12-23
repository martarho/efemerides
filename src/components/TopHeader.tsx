import React, { useState, useRef } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import useOnClickOutside from "../hooks/useOnClickOutside";

import styled from "styled-components";

const TopHeader = (props: {}) => {
    const [isOpen, setOpen] = useState(false);
    const node = useRef(null);
    useOnClickOutside(node, () => setOpen(false));

    return (
        < TopMenuContainer ref={node} >
            <AppTitle>
                efemèrides - a garden manager
        </AppTitle>
            < Burger isOpen={isOpen} setOpen={setOpen} />
            <Menu isOpen={isOpen} />
        </TopMenuContainer>
    );
}

const TopMenuContainer = styled.div`
   position:absolute;
   top: 0px;
   left:0px;
   max-width: 100wv;
   background: ${({ theme }) => theme.white};
    `
const AppTitle = styled.h1`
    position: relative;
    top: 0px;
    left: 2.5em;
    padding: 2rem;
    padding: 1rem;
    text - size: 10px;
    text - decoration: underline;
    text - decoration - skip: ink;
`;


export default TopHeader;