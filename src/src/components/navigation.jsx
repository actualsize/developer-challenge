import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import Cupcakes from "./CupCakesCard";
import Soups from "../pages/404";

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

const Wrapper = styled(`nav`)`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-family: jura;
    text-decoration: none;
`;

const MenuBtn = styled(`a`)`
	padding: 10px;
	text-decoration: none;
	color: #ffffff;
    border-radius: 50px;
`;

export default function Navigation({ children }) {
    return(
        <Wrapper>
            <MenuBtn href="#" onClick={handleClick}>profile</MenuBtn>
            <MenuBtn href="./TheSoup" >SOUPS</MenuBtn>
            <MenuBtn href="./desserts" >DESSERTS</MenuBtn>
            <MenuBtn href="./petFood">PET FOOD</MenuBtn>
            <MenuBtn href="#" onClick={handleClick}>cart</MenuBtn>
        </Wrapper>
    )
}