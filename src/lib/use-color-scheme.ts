import { useTheme } from 'next-themes';

export function useColorScheme() {
	const { theme } = useTheme();
	if (isColorScheme(theme)) {
		return theme;
	}
}

function isColorScheme(scheme: string | undefined): scheme is ColorScheme {
	for (const colorScheme of validColorSchemes) {
		if (colorScheme === scheme) return true;
	}
	return false;
}

const validColorSchemes = ['light', 'dark', 'system'] as const;

type ColorScheme = (typeof validColorSchemes)[number];
