// Modified by Philip Williamson on June 6th, 2021
import React from "react";
import { graphql } from "gatsby";
import "normalize.css";
import styled from "@emotion/styled";
import SEO from "../components/SEO";
import ActiveProductProvider from "../providers/activeProductProvider";
import CallbackProvider from "../providers/CallbackProvider";
import LogoContainer from "../components/LogoContainer";
import Card from "../components/Card";

import Navbar from "../components/NavBar";
import "../styles/style.css";

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

	background-color: #7855da;
	color: #43d1e7;

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
// current prdoct
const Index = ({ data }) => {
	// useEffect(() => {
	// 	document.querySelector(`#desserts-button`).focus();
	// }, []);

	// get the product data from prisma
	// convert nodes array from our query to an object with
	// the product type as the key for each product data value
	const products = Object.assign(
		{},
		...data.allPrismicProduct.nodes.map((product) => ({
			[product.data.type]: product.data,
		}))
	);
	//
	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<ActiveProductProvider>
					<LogoContainer />
					<CallbackProvider>
						<Card products={products} />
					</CallbackProvider>
					<Navbar />
				</ActiveProductProvider>
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
			nodes {
				data {
					title {
						text
					}
					description {
						text
					}
					image {
						alt
						url
					}
					quantity {
						text
					}
					type
				}
			}
		}
	}
`;
