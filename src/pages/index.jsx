import React, { useState } from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import SEO from "../components/SEO";
import Card from "../components/Card";
import Menu from "../components/Menu";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
// including global style variables here for accessibility throughout project
const Container = styled.div`
	--main-bg: #7855da;
	--accent: #da55bd;
	--light: #ffffff;
	--dark: #000000;

	--card-radius: 50px;
	--padding: 30px;

	--phi = 1.618;

	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: var(--main-bg);
	color: var(--light);

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
const Index = ({ data }) => {
	// get the product data from prisma

	// NB: I may be destructuring this one level too deep
	// if we need the `id` of the items, replace line 50 with
	// `(edge) => edge.node` and then it will contain { id, data }
	const items = data.allPrismicProduct.edges.map(
		(edge) => edge.node.data
	);

	// currItem is the only state
	// current item is rendered in the card
	// initialized to cupcakes (dessert) per spec
	const [currItem, setCurrItem] = useState(
		items.find((item) => item.type === `DESSERT`)
	);

	// current item is passed to card, as well as callback for order button
	// menu can manipulate state with the setItem callback function
	// and uses type of current item to display active menu item styles
	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<Card
					item={currItem}
					orderButton={() =>
						console.log(`Order button clicked!`)
					}
				/>
				{/* setItem is MenuItem click handler which turns
					item's type (as a string) into element in items
					array returned from query by filtering */}
				<Menu
					type={currItem.type}
					setItem={(type) =>
						setCurrItem(
							items.find((item) => item.type === type)
						)
					}
				/>
			</Container>
		</>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
export const query = graphql`
	query {
		allPrismicProduct {
			edges {
				node {
					id
					data {
						description {
							text
						}
						image {
							url
						}
						quantity {
							text
						}
						title {
							text
						}
						type
					}
				}
			}
		}
	}
`;
