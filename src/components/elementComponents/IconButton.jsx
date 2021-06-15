// icon button using Font Awesome icon type and console message as props
import React from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ iconType, consoleMessage }) {
	return (
		<li>
			<FontAwesomeIcon
				icon={iconType}
				size="xs"
				color="white"
				transform="up-2.5"
				css={css`
					cursor: pointer;
				`}
				onClick={() => {
					console.log(consoleMessage);
				}}
			/>
		</li>
	);
}
