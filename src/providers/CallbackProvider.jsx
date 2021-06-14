import React, { useContext, useState } from "react";

const CallbackContext = React.createContext();
const CallbackUpdateContext = React.createContext();

export function useCallbackContext() {
	return useContext(CallbackContext);
}

export function useCallbackUpdateContext() {
	return useContext(CallbackUpdateContext);
}

export default function CallbackProvider({ children }) {
	const [callback, setCallback] = useState(() => () => {});
	return (
		<CallbackContext.Provider value={callback}>
			<CallbackUpdateContext.Provider value={setCallback}>
				{children}
			</CallbackUpdateContext.Provider>
		</CallbackContext.Provider>
	);
}
