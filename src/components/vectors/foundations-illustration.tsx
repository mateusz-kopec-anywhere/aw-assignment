'use client';

import { useId } from 'react';

export function FoundationsIllustration(props: React.SVGProps<SVGSVGElement>) {
	const id = useId();
	return (
		<svg
			{...props}
			aria-hidden="true"
			fill="none"
			focusable="false"
			role="img"
			viewBox="0 0 272 122"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				clipPath={`url(#${id})`}
				stroke="#586874"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
			>
				<path
					clipRule="evenodd"
					d="M246.247 96l19.979 20h-39.958l19.979-20zm0-20l19.979 20h-39.958l19.979-20z"
				/>
				<ellipse cx={181.321} cy={76.001} rx={19.979} ry={20} />
				<path d="M181.321 116V76" />
				<ellipse cx={41.465} cy={36.001} rx={19.979} ry={20} />
				<path d="M41.465 76V36m69.928 80v-10h-9.99V96h-9.99V86h-9.99V76" />
				<path
					clipRule="evenodd"
					d="M201.299 116H1.508c0-22.09 17.89-40 39.958-40h119.875c0 11.046 8.945 20 19.979 20 11.035 0 19.979 8.955 19.979 20z"
				/>
				<path d="M81.424 36.001h39.958v40H81.424z" />
				<path
					clipRule="evenodd"
					d="M121.383 36l19.979-20 19.979 20v40h-39.958V36zm-39.959 0l19.979-20h39.958l-19.979 20H81.424z"
				/>
			</g>
			<defs>
				<clipPath id={id}>
					<path d="M0 0h272v122H0z" fill="#fff" />
				</clipPath>
			</defs>
		</svg>
	);
}
