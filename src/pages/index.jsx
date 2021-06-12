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

	background-color: #7855DA;
	color: #43d1e7;

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
//current prdoct
var product = "DESSERT";
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
				<div
					css={css`
						font-family: Jura;
					`}
				>
					{item.description.text}
				</div>
				<div
					css={css`
						font-family: Jura;
						height: 370px;
						width: 330px;
						overflow: hidden;
						position: relative;
					`}
				>
					<img 
						css={css`
							position: absolute;
							bottom: 0;
							width: 100%;
						`}
						src="https://images.prismic.io/developer-challenge/6ba17dc8-723d-463b-ae5c-b0ba6579f153_deva-williamson-ymy-t_sKkNk-unsplash.jpg?auto=format%2Ccompress&rect=0%2C0%2C640%2C960&w=600&h=900&fit=max&q=50" 
						alt="Yellow cupcakes with green paper wrap and rainbow frosting"
					></img>
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
	query MyQuery {
		prismicProduct(data: {type: {eq: "DESSERT"}}) {
			id
			data {
			title {
				text
			}
			quantity {
				text
			}
			description {
				text
			}
			}
		}
	}
`;
