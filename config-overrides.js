const path = require("path");

module.exports = {
	paths: function (paths) {
		paths.appPath = path.resolve(__dirname, "./src/client");
		paths.appIndexJs = path.resolve(__dirname, "./src/client/src/index.js");
		paths.appSrc = path.resolve(__dirname, "./src/client");
		paths.appHtml = path.resolve(__dirname, "./src/client/public/index.html");
		paths.appPublic = path.resolve(__dirname, "./src/client/public");
		paths.testsSetup = path.resolve(__dirname, "./src/client/src/setupTests.js");
		return paths;
	},
};
