import { HeadElem as Head } from '../components/Head';
import Link from 'next/link';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/Thumbnail';
import { statuses } from '../lib/statuses';
import useReducedMotion from '../lib/useReducedMotion';

export default function Home({ statusObj }) {
	const reducedMotion = useReducedMotion(false);

	return (
		<div className="app">
			<Head metadata={metadata} />
			<header>
				<p className="header__title">HTTBey Status Codes</p>
			</header>

			<main className="main__content">
				<p>
					HTTBey Status Codes is an easy to reference database of HTTP Status Codes with
					their definitions and helpful code references all in one place. Visit an
					individual status code via <code>httbey.com/status/[code]</code> or browse the
					list below.
				</p>
				<ThumbnailGrid>
					{Object.values(statusObj).map((status, idx) => {
						return (
							<Link key={idx} className="status" href={`/status/${status.code}`}>
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

export async function getStaticProps() {
	const statusObj = statuses;
	return {
		props: {
			statusObj,
		},
	};
}

const metadata = {
	title: 'HTTBey Status Codes',
	description: 'Beyoncé-inspired HTTP Status Codes',
	generator: 'Next.js',
	url: 'https://httbey.com',
	openGraph: {
		title: 'HTTBey Status Codes',
		description: 'Beyoncé-inspired HTTP Status Codes',
		image: {
			src: '/og-image.png',
			alt: 'HTTBey Status Codes',
		},
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'HTTBey Status Codes',
		description: 'Beyoncé-inspired HTTP Status Codes',
		site: 'https://httbey.com',
		image: {
			src: '/og-image.png',
			alt: 'HTTBey Status Codes',
		},
	},
};
