import React, { useContext, useState } from "react";

const ActiveProductContext = React.createContext();
const ActiveProductUpdateContext = React.createContext();

export function useActiveProductContext() {
	return useContext(ActiveProductContext);
}

export function useActiveProductUpdateContext() {
	return useContext(ActiveProductUpdateContext);
}

export default function ActiveProductProvider({ children }) {
	// set initial state for active product
	const [activeProduct, setActiveProduct] = useState(`DESSERT`);
	return (
		<ActiveProductContext.Provider value={activeProduct}>
			<ActiveProductUpdateContext.Provider
				value={setActiveProduct}
			>
				{children}
			</ActiveProductUpdateContext.Provider>
		</ActiveProductContext.Provider>
	);
}
