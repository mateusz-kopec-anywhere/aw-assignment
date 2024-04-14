import { useId } from 'react';

export function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
	const id = useId();
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			role="img"
			viewBox="0 0 17 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath={`url(#${id})`}>
				<path
					d="M4.009 24a4.005 4.005 0 004.007-4v-4H4.01A4.005 4.005 0 000 20c0 2.208 1.796 4 4.008 4z"
					fill="#0acf83"
				/>
				<path
					d="M.001 12c0-2.208 1.796-4 4.008-4h4.007v8H4.01A4.005 4.005 0 010 12z"
					fill="#a259ff"
				/>
				<path
					d="M.001 4c0-2.208 1.796-4 4.008-4h4.007v8H4.01A4.005 4.005 0 010 4z"
					fill="#f24e1e"
				/>
				<path
					d="M8.017 0h4.008a4.005 4.005 0 014.007 4c0 2.208-1.795 4-4.008 4H8.018V0z"
					fill="#ff7262"
				/>
				<path
					d="M16.032 12c0 2.208-1.795 4-4.008 4a4.005 4.005 0 01-4.007-4c0-2.208 1.795-4 4.008-4a4.005 4.005 0 014.007 4z"
					fill="#1abcfe"
				/>
			</g>
			<defs>
				<clipPath id={id}>
					<path d="M0 0h16.033v24H0z" fill="#fff" />
				</clipPath>
			</defs>
		</svg>
	);
}
