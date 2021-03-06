import React from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

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
