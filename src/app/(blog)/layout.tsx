import './styles.css';
import { BrandProvider } from '~/components/brand-provider';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { ThemeProvider } from '~/components/theme-provider';
import { getCommonNav, getMainNav } from '~/lib/get-main-nav';

export default async function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const commonNav = await getCommonNav();
	const mainNav = getMainNav(commonNav);

	return (
		<html
			className="font-sans text-foreground antialiased"
			lang="en-AU"
			suppressHydrationWarning
		>
			<body className="flex min-h-screen justify-center overflow-visible bg-white [tab-size:2] dark:bg-black">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<BrandProvider className="flex w-full flex-col bg-white dark:bg-black">
						<Header mainNav={mainNav} />
						{children}
						<Footer />
					</BrandProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
