import React from "react";
import { graphql } from "gatsby";
import "normalize.css";
import styled from "@emotion/styled";
import SEO from "../components/SEO";
import ActiveProductProvider from "../components/contextProviders/ActiveProductProvider";
import CallbackProvider from "../components/contextProviders/CallbackProvider";
import LogoContainer from "../components/elementComponents/LogoContainer";
import Card from "../components/elementComponents/Card";
import Navbar from "../components/elementComponents/NavBar";

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
const Index = ({ data }) => {
	// get the product data from prisma
	// convert nodes array from our graphql query to an object with
	// the product types as keys amd product data as values
	// should make it easier to access data via product type
	const products = Object.assign(
		{},
		...data.allPrismicProduct.nodes.map((product) => ({
			[product.data.type]: product.data,
		}))
	);

	return (
		<>
			{/* set the page metadata */}
			<SEO title="Philip Williamson's Submission" />

			<Container>
				<LogoContainer />
				{/* context provider for the currently active product */}
				<ActiveProductProvider>
					{/* context provider for callback function between Card and OrderButton */}
					<CallbackProvider>
						{/* Card component takes products object as prop */}
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
