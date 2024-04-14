import { cn } from '~/lib/utils';

export function TypographySymbol(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			aria-hidden="true"
			className={cn('p-1.5', props.className)}
			fill="none"
			focusable="false"
			role="img"
			viewBox="0 0 65 41"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="fill-[#2c343a] dark:fill-[#cad6ec]"
				d="M7.917 40l3.24-9.684h14.766L29.183 40h7.594L22.932.727h-8.783L.323 40h7.594zm5.158-15.398l5.312-15.82h.307l5.312 15.82h-10.93zM49.32 40.594c4.621 0 7.383-2.166 8.648-4.64h.23V40h6.674V20.287c0-7.786-6.348-10.125-11.966-10.125-6.194 0-10.95 2.761-12.484 8.13l6.482.921c.69-2.013 2.646-3.74 6.04-3.74 3.222 0 4.986 1.65 4.986 4.545v.116c0 1.994-2.09 2.09-7.287 2.646-5.715.613-11.18 2.32-11.18 8.955 0 5.791 4.238 8.86 9.857 8.86zm1.802-5.1c-2.895 0-4.966-1.324-4.966-3.874 0-2.666 2.32-3.778 5.427-4.219 1.821-.249 5.465-.71 6.366-1.438v3.47c0 3.28-2.646 6.06-6.827 6.06z"
			/>
		</svg>
	);
}
