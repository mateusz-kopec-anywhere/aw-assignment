'use client';

export function ComponentsIllustration(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			aria-hidden="true"
			fill="none"
			focusable="false"
			role="img"
			viewBox="0 0 273 122"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx={81}
				cy={81.001}
				r={20}
				stroke="#586874"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M81 121V81m31 20h40v20h-40z"
				stroke="#586874"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				clipRule="evenodd"
				d="M152 101l20-20 20 20v20h-40v-20z"
				stroke="#586874"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				clipRule="evenodd"
				d="M112 101l20-20h40l-20 20h-40z"
				stroke="#586874"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<path
				d="M192 1h80v120h-80zM3 26h40v95H3z"
				stroke="#586874"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			/>
			<rect fill="#586874" height={2} rx={1} width={129} y={120} />
		</svg>
	);
}
