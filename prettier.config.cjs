const config = {
	proseWrap: "always",
	singleQuote: true,
	tabWidth: 2,
	trailingComma: "es5",
	useTabs: true,
	plugins: [
		require.resolve('prettier-plugin-tailwindcss'),
	],
};

module.exports = config;
