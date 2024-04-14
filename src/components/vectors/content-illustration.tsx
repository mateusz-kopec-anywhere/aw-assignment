'use client';

import { useId } from 'react';

export function ContentIllustration(props: React.SVGProps<SVGSVGElement>) {
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
			<g clipPath={`url(#${id})`} stroke="#586874">
				<path
					clipRule="evenodd"
					d="M207.001 100.5l20.001 20.002H187l20.001-20.002z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					clipRule="evenodd"
					d="M207.001 80.5l20.001 20.001H187l20.001-20z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					clipRule="evenodd"
					d="M207.001 60.5l20.001 20.002H187l20.001-20.001z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					clipRule="evenodd"
					d="M207.001 40.5l20.001 20.001H187l20.001-20zm-82.999 60l20.001 20.002H104l20.002-20.002z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					clipRule="evenodd"
					d="M124.002 80.5l20.001 20.001H104l20.002-20zM44 120.503l20-40.002 20.002 40.002H44z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					clipRule="evenodd"
					d="M4 120.503l20-40.002h40.003l-20 40.002H4z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					d="M64 80.5v40"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					clipRule="evenodd"
					d="M247.001 100.5l20.001 20.002H227l20.001-20.002z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					clipRule="evenodd"
					d="M247.001 80.5l20.001 20.001H227l20.001-20z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					d="M144 121H4"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<rect height={1} rx={0.5} width={128} x={139.5} y={120.5} />
				<path
					clipRule="evenodd"
					d="M34 50.503c11.047 0 20.002-8.955 20.002-20.002 0-11.046-8.955-20-20.001-20C22.955 10.5 14 19.454 14 30.5c0 11.047 8.955 20.002 20 20.002z"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
				<path
					d="M84 21h40M89 11h10m86 .5h80m-52-10h40m-32 20h20"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
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
