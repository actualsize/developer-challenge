import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import ProductStockImage from "../assets/petfood.jpg";

// wrapper for the card to contain
// ordered from top to bottom
// everything must change onClick event to menu or maybe multiple components that change onClick event?
const Wrapper = styled(`div`)`
	padding: 0px;
	height: 600px;
	width: 330px;
	border-radius: 50px;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
/* image of Product at top img files in assests. */
const ProductImage = styled(`img`)`
	height: 40%;
	width: 100%;
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
`;

const ProductName = styled(`h3`)`
	padding-left: 10%;
	color: black;
`;

/*	description that coincides with the img */
const ProductDescription = styled(`div`, `p`)`
	font-family: jura;
	color: black;
	font-size: 15px;
	padding: 10%;
	text-decoration: underline;
`;

/*	button that orders product */
const OrderBtn = styled("a")`
	background-color: #da55bd;
	color: #ffffff;
	border-radius: 50px;
	border: none;
	font-family: jura;
	padding-left: 32px;
	padding-right: 32px;
	padding-top: 15px;
	padding-bottom: 15px;
	font-size: 22px;
	margin-bottom: 10px;
`;

export default function Cupcake({ children }) {
	return (
		<Wrapper>
			<ProductImage src={ProductStockImage}></ProductImage>
			<ProductName>Gourmet Dog Food</ProductName>
			<ProductDescription>
				For those who love thier fur children more
				than they love their own, Single serve and
				the price of a full bag that lasts a month
				show them you care.

			</ProductDescription>
			<OrderBtn>Order A Dozen</OrderBtn>
		</Wrapper>
	);
}
