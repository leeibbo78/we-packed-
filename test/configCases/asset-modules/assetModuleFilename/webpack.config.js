module.exports = {
	mode: "development",
	output: {
		assetModuleFilename: file => {
			if (/.png$/.test(file)) {
				return "images/success-png[ext]";
			}
			if (/.svg$/.test(file)) {
				return "images/success-svg[ext]";
			}
			return "images/failure[ext]";
		}
	},
	module: {
		rules: [
			{
				test: /\.(png|svg)$/,
				type: "asset"
			}
		]
	},
	experiments: {
		asset: true
	}
};
