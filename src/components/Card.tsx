import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = (props: { areaID: number; cardTitle: string; cardLocation: string; cardDescription: string; totalPlants: number }) => {
    const { areaID, cardTitle, cardLocation, cardDescription, totalPlants } = props;
    return (
        <StyledCard>
            <CardHeader>
                <NavLink to={`/lists/${areaID}`}>
                    {cardTitle}
                </NavLink>
            </CardHeader>
            <CardLocation>{cardLocation}</CardLocation>
            <CardTotal><h3>{totalPlants}</h3> plants </CardTotal>
        </StyledCard >
    );
};


const StyledCard = styled.div`
    width: 15rem;
    height: 15rem;
    display: inline-block;
    margin:10px;
    border: 1px solid #eee;
    box-shadow:0px 2px 2px #ccc;
    border-radius: 15px;
    color: black;
    padding: 20px;
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.secondaryDark};;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.secondaryColor};;
      }
`

const CardHeader = styled.h1`
padding-left:10px;
font-size: 1em;
color: ${({ theme }) => theme.secondaryDark};;
`

const CardLocation = styled.h2`
padding-left:10px;
padding-bottom:20px;
font-size: 0.8em;
color: grey;
`
const CardTotal = styled.div`
padding-left:10px;
color: ${({ theme }) => theme.primaryColor};
font-size: 1.5em;
display: inline;
h3 {
    font-size: 2.5em;
    display:inline;
}
`
export default Card