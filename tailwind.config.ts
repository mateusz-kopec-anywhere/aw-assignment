import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import animatePlugin from 'tailwindcss-animate';

export default {
	darkMode: 'class',
	content: ['./content/**/*.{json,mdoc}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				border: 'hsl(var(--border))',
				'docs-input': 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'docs-primary': {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				positive: {
					DEFAULT: 'hsl(var(--positive))',
					foreground: 'hsl(var(--positive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
				display: ['Paralucent', ...fontFamily.sans],
				copy: ['SimplonBP', ...fontFamily.sans],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0px' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0px' },
				},
			},
			typography: () => ({
				DEFAULT: {
					css: {
						maxWidth: '100ch',
						h1: {
							fontWeight: '600',
							textWrap: 'balance',
						},
						h2: {
							fontWeight: '600',
							textWrap: 'balance',
						},
						h3: {
							fontWeight: '600',
							textWrap: 'balance',
						},
						h4: {
							fontWeight: '600',
							textWrap: 'balance',
						},
						h5: {
							fontWeight: '600',
							textWrap: 'balance',
						},
						h6: {
							fontWeight: '600',
							textWrap: 'balance',
						},
						':where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))::before':
							{
								content: 'none',
							},
						'.prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"] *))::after':
							{
								content: 'none',
							},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none',
						},
					},
				},
			}),
		},
	},
	plugins: [animatePlugin, typographyPlugin, docsPlugin()],
} satisfies Config;

function docsPlugin() {
	return plugin(({ addBase, theme }) => {
		addBase({
			// Add custom properties for global styles and colors
			':root': {
				'--header-height': '4rem',
				'--radius': '0.5rem',
			},
			'.light': {
				...colors.light,
			},
			'.dark': {
				...colors.dark,
			},

			// Add default border color to all elements
			'*': {
				borderColor: theme('colors.border'),
			},

			// Add scroll margin to all elements with an id to account for fixed header
			':where([id])': {
				scrollMarginTop: '5.5rem',
			},

			// Animation for the easing section on the motion page
			'@keyframes move': {
				'0%, to': {
					transform: 'translate(0%)',
				},
				'50%': {
					transform: 'translate(100%)',
				},
			},
		});
	});
}

const colors = {
	light: {
		'--background': '0 0% 100%',
		'--foreground': '222.2 84% 4.9%',
		'--muted': '210 40% 96.1%',
		'--muted-foreground': '206 14% 40%',
		'--popover': '0 0% 100%',
		'--popover-foreground': '222.2 84% 4.9%',
		'--card': '0 0% 100%',
		'--card-foreground': '222.2 84% 4.9%',
		'--border': '214.3 31.8% 91.4%',
		'--input': '214.3 31.8% 91.4%',
		'--primary': '223 91% 71%',
		'--primary-foreground': '210 40% 98%',
		'--secondary': '210 40% 96.1%',
		'--secondary-foreground': '222.2 47.4% 11.2%',
		'--accent': '210 40% 96.1%',
		'--accent-foreground': '222.2 47.4% 11.2%',
		'--destructive': '0, 73%, 16%,',
		'--destructive-foreground': '4, 100%, 95%',
		'--ring': '215 20.2% 65.1%',
		'--positive': '156, 68%, 16%',
		'--positive-foreground': '156, 68%, 96%',
	},
	dark: {
		'--background': '222.2 84% 4.9%',
		'--foreground': '210 40% 98%',
		'--muted': '217.2 32.6% 17.5%',
		'--muted-foreground': '210 14% 77%',
		'--popover': '222.2 84% 4.9%',
		'--popover-foreground': '210 40% 98%',
		'--card': '222.2 84% 4.9%',
		'--card-foreground': '210 40% 98%',
		'--border': '217.2 32.6% 17.5%',
		'--input': '217.2 32.6% 17.5%',
		'--primary': '223 91% 71%',
		'--primary-foreground': '222.2 47.4% 11.2%',
		'--secondary': '217.2 32.6% 17.5%',
		'--secondary-foreground': '210 40% 98%',
		'--accent': '217.2 32.6% 17.5%',
		'--accent-foreground': '210 40% 98%',
		'--destructive': '0, 100%, 79%',
		'--destructive-foreground': '0, 38%, 19%',
		'--ring': '217.2 32.6% 17.5%',
		'--positive': '150, 42%, 58%',
		'--positive-foreground': '161, 38%, 11%',
	},
};
