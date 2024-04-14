export function TokensSymbol(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			aria-hidden="true"
			fill="none"
			focusable="false"
			role="img"
			viewBox="0 0 96 48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx={24} cy={24} fill="#94cafa" r={24} />
			<circle cx={48} cy={24} fill="#5eb0f8" r={24} />
			<circle cx={72} cy={24} fill="#1d90f5" r={24} />
		</svg>
	);
}
