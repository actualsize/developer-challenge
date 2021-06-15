// here we utilize useContext with useState to setup a
// global flag for the currently active product
// this is used by the Card component and its children for rendering and
// the Navbutton components for updating and rendering
import React, { useContext, useState } from "react";

const ActiveProductContext = React.createContext();
const ActiveProductUpdateContext = React.createContext();

// functions for accessing the respective contexts
export function useActiveProductContext() {
	return useContext(ActiveProductContext);
}

export function useActiveProductUpdateContext() {
	return useContext(ActiveProductUpdateContext);
}

export default function ActiveProductProvider({ children }) {
	// here we wrap our context providers in the ActiveProductProvider componenent
	// children can then access the state and setState function through this component

	// set initial state for active product
	const [activeProduct, setActiveProduct] = useState(`DESSERT`); // set 'DESSERT' as the default active product
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
