import React from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Navigation from "../components/navigation"
{/* change card to a blank data card */}
import Card from "../components/PetFoodCard.jsx";

import SEO from "../components/SEO";
import { ReactComponent as Logo } from "../assets/Logo.svg";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
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
				{/*	purple layout at  896px x 414px */}
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
					{/*	set a card(size 330px x 600px)that takes hooks to change onClick event */}
					{/*	card layout */}
					<Card />
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
