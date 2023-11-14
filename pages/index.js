import Head from 'next/head';
import Link from 'next/link';
import ThumbnailGrid from '../components/ThumbnailGrid';
import Thumbnail from '../components/Thumbnail';
import { statuses } from '../lib/statuses';
import useReducedMotion from '../lib/useReducedMotion';

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

export async function getStaticProps() {
	const statusObj = statuses;
	return {
		props: {
			statusObj,
		},
	};
}
