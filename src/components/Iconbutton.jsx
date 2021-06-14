// nav button using font awesome
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Iconbutton({ iconType, consoleMessage }) {
	return (
		<li>
			<FontAwesomeIcon
				icon={iconType}
				size="xs"
				color="white"
				transform="up-2.5"
				onClick={() => {
					console.log(consoleMessage);
				}}
			/>
		</li>
	);
}
