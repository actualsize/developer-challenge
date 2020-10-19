import React from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Navigation from "../components/navigation"
{/* change card to a blank data card */}
import Card from "../components/CupCakesCard";

import SEO from "../components/SEO";
import { ReactComponent as Logo } from "../assets/Logo.svg";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them

// navigation buttons variables and fetch requests must alter to make work.
/* var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');
pokeBackImage.src = data['sprites']['back_default'] || '';
pokeFrontImage.src = data['sprites']['front_shiny'] || '';
*/
const Container = styled.div`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #c0ffee;
	color: #43d1e7;

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
const Index = ({ data }) => {
	// get the product data from prisma
	const item = data.prismicProduct.data;

	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<div
					css={css`
						margin-bottom: 1rem;
					`}
				>
					I want {item.quantity.text} of{` `}
					{item.title.text}, please.
				</div>
				{/*	purple background Should remain Static DO NOT RELOAD! layout at  896px x 414px */}
				<div
					css={css`
						height: 896px;
						width: 414px;
						background-color: #7855da;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
					`}
				>
					<Logo
						css={css`
							color: #ffffff;
						`}
					/>
					{/*	set a card(size 330px x 600px)that takes hooks to change onClick event !!!Added possible solution at top ref the pokedex API project */}
					{/*	card layout */}
					{/*	Main Card FAILED used anchors with page components called CupCakesCard PetFoodCard and SoupsCard */}
					<Card />
					{/*	bottom navigation menu layout 5 nav links must be active */}
					{/*	console.log the profile and cart */}
					{/*	3 center nav links that active when clicked and hook  */}
					{/*	changed to a component called navigation.jsx */}
					<Navigation />
				</div>
					{/*	bottom navigation menu layout 5 nav links must be active */}

					{/*	console.log the profile and cart */}
					{/*	3 center nav links that active when clicked and hook  */}
					<Logo />
			</Container>
		</>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
export const query = graphql`
	query {
		prismicProduct(data: { type: { eq: "SOUP" } }) {
			id
			data {
				title {
					text
				}
				quantity {
					text
				}
			}
		}
	}
`;
