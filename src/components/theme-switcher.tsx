import { useTheme } from 'next-themes';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '~/components/dropdown-menu';
import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={cn(
					'flex h-12 w-24 items-center justify-center rounded-full fill-current',
					packs.focusVisible
				)}
			>
				<p className="h-4 w-4 dark:hidden">Light</p>
				<p className="hidden h-4 w-4 dark:block">Dark</p>
				<span className="sr-only">Change theme</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{[
					{
						label: 'Light',
						theme: 'light',
					},
					{
						label: 'Dark',
						theme: 'dark',
					},
					{
						label: 'System',
						theme: 'system',
					},
				].map((item) => (
					<DropdownMenuItem asChild key={item.theme}>
						<button
							className="flex w-full items-center gap-2"
							onClick={() => setTheme(item.theme)}
						>
							{theme === item.theme ? (
								<p className="h-4 w-4">✔</p>
							) : (
								<span aria-hidden="true" className="w-4" />
							)}
							{item.label}
						</button>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
