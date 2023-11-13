import Head from 'next/head';
import Link from 'next/link';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/Thumbnail';
import { statuses } from '../lib/statuses';
import useReducedMotion from '../lib/useReducedMotion';
import { Metadata } from 'next';

export default function Home({ statusObj }) {
	const reducedMotion = useReducedMotion(false);

	return (
		<div className="app">
			<Head>
				<title>HTTBey Status Codes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<p className="header__title">HTTBey Status Codes</p>
			</header>

			<main className="main__content">
				<p>
					HTTBey Status Codes is an easy to reference database of HTTP Status Codes with
					their definitions and helpful code references all in one place. Visit an
					individual status code via <code>httbey.com/[code]</code> or browse the list
					below.
				</p>
				<ThumbnailGrid>
					{Object.values(statusObj).map((status, idx) => {
						return (
							<Link key={idx} className="status" href={`/${status.code}`}>
								<Thumbnail status={status} reducedMotion={reducedMotion} />
							</Link>
						);
					})}
				</ThumbnailGrid>
			</main>
			<footer>
				<p className="footer__note">
					Curated by{' '}
					<Link
						href=""
						target="_blank"
						className="footer__link"
						rel="noopener noreferrer"
					>
						Mina
					</Link>
					• Not affliated with Parkwood Entertainment
				</p>
			</footer>
		</div>
	);
}

export const metadata = {
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.png',
		apple: '/apple-touch-icon.png',
		other: [{ rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon.png' }],
	},
	viewport: 'width=device-width, initial-scale=1',
	title: 'HTTP Cats',
	description:
		'An API for the awesome HTTP Cats! Use it in your website to show funny error messages.',
	keywords: 'http, cats, http cats, http status cats, status cats, api, lolcats, error',
	authors: [{ name: 'Rogério Vicente', url: 'https://github.com/rogeriopvl' }],
	openGraph: {
		type: 'website',
		title: 'HTTP Cats',
		url: 'https://http.cat',
		images: [
			{
				url: 'https://http.cat/100.jpg',
				alt: 'HTTP Cats',
			},
		],
		siteName: 'HTTP Status Cats API',
		description: 'API for HTTP Cats',
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://http.cat',
		creator: '@rogeriopvl',
		title: 'HTTP Cats',
		description: 'API for HTTP Cats',
		images: ['https://http.cat/100'],
	},
	themeColor: '#d0383e',
	manifest: '/manifest.json',
};

export async function getStaticProps() {
	const statusObj = statuses;
	return {
		props: {
			statusObj,
		},
	};
}
