// here we utilize useContext with useState to allow a
// callback function to be shared through the Card and OrderButton components
import React, { useContext, useState } from "react";

const CallbackContext = React.createContext();
const CallbackUpdateContext = React.createContext();

// functions for accessing the respective contexts
export function useCallbackContext() {
	return useContext(CallbackContext);
}

export function useCallbackUpdateContext() {
	return useContext(CallbackUpdateContext);
}

export default function CallbackProvider({ children }) {
	// here we wrap our context providers in the CallbackProvider componenent
	// children can then access the state and setState function through this component

	// set initial state for callback function using an empty function as the initial state variable
	const [callback, setCallback] = useState(() => () => {});
	return (
		<CallbackContext.Provider value={callback}>
			<CallbackUpdateContext.Provider value={setCallback}>
				{children}
			</CallbackUpdateContext.Provider>
		</CallbackContext.Provider>
	);
}
