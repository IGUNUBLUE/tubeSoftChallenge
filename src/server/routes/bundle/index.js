import React from "react";
import ReactDom from "react-dom/server";
import { Router } from "express";

import App from "../../../client/components/app";

const router = Router();

router.get("*", (_, res) => {
	const root = (
		<html>
			<body>
				<div id="root">
					<App />
				</div>
				<script src="/static/bundle.js"></script>
			</body>
		</html>
	);
	const html = ReactDom.renderToString(root);

	res.send(html);
});

export default router;