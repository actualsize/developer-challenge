module.exports = {
	siteMetadata: {
		title: `Developer Challenge`,
		description: `The 100% official Actual Size Developer Challenge 2020.`,
	},
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-fontawesome-css`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-svgr`,
		{
			resolve: `gatsby-plugin-emoji-favicon`,
			options: {
				emoji: `🦄`,
			},
		},
		{
			resolve: `gatsby-source-prismic`,
			options: {
				repositoryName: `developer-challenge`,
				schemas: {
					product: require(`./src/schemas/product.json`),
				},
			},
		},
		{
			resolve: `gatsby-plugin-web-font-loader`,
			options: {
				google: {
					families: [`Lobster`, `Jura`],
				},
			},
		},
	],
};
