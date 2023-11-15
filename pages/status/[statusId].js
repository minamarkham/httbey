import fs from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import { HeadElem as Head } from '../../components/Head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PlayButton from '../../components/PlayButton';
import { statuses, categories } from '../../lib/statuses';

export default function Status({ status, content }) {
	const router = useRouter();
	const { statusId } = router.query;
	const title = `${status.code} ${status.message} | HTTBey`;

	const metadata = {
		title: title,
		description: `HTTBey for status ${status.code} ${status.message}`,
		generator: 'Next.js',
		url: `https://httbey.com/status/${status.code}`,
		openGraph: {
			title: title,
			description: `HTTBey for status ${status.code} ${status.message}`,
			image: {
				src: `https://httbey.com/og/${status.code}.jpg`,
				alt: `${status.code} ${status.message}`,
			},
			locale: 'en_US',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: title,
			description: `HTTBey for status ${status.code} ${status.message}`,
			site: `https://httbey.com/status/${status.code}`,
			image: {
				src: `https://httbey.com/og/${status.code}.jpg`,
				alt: `${status.code} ${status.message}`,
			},
		},
	};

	return (
		<div className="app">
			<Head metadata={metadata} />
			<header>
				<p className="header__title">HTTBey Status Codes</p>
			</header>
			<main className="status__content">
				<nav>
					<Link href="/" className="">
						← Back
					</Link>
				</nav>

				<h3 className="status__category">
					{status.set}&times;&times; {categories[status.set]}
				</h3>
				<h1 className="status__title">
					{status.code} {status.message}
				</h1>
				<div className="status__media">
					<video
						id="statusVideo"
						title={status.desc}
						className="status__video"
						autoPlay
						loop
						muted
						playsInline
						poster={`/media/${statusId}.jpg`}
						height={465}
					>
						<source src={`/media/${statusId}.webm`} type="video/webm" />
						<source src={`/media/${statusId}.mp4`} type="video/mp4" />
					</video>
					<PlayButton onPause={onPause} onPlay={onPlay} />
					{status.source !== '' && (
						<p className="status__label status__source">
							<Link href={status.source}>Source</Link>
						</p>
					)}
				</div>
				<section
					className="status__description"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
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

async function getStatusContent(statusId) {
	const fileContent = fs.readFileSync(`content/${statusId}.md`, 'utf-8');
	const result = await unified()
		.use(remarkParse)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeExternalLinks, { target: '_blank', rel: ['noopener'] })
		.use(rehypeStringify, { allowDangerousHtml: true })
		.process(fileContent);

	return result.toString();
}

function onPause() {
	const pause = document.getElementById('pause');
	const play = document.getElementById('play');
	const video = document.getElementById('statusVideo');
	pause.classList.remove('active');
	play.classList.add('active');
	video.pause();
}

function onPlay() {
	const pause = document.getElementById('pause');
	const play = document.getElementById('play');
	const video = document.getElementById('statusVideo');
	pause.classList.add('active');
	play.classList.remove('active');
	video.play();
}

export async function getStaticPaths() {
	const paths = Object.keys(statuses).map((status) => ({
		params: { statusId: status },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const statusId = params.statusId;
	const statusObj = statuses[statusId];

	try {
		const contentHtml = await getStatusContent(statusId);

		return {
			props: {
				status: statusObj,
				content: contentHtml,
			},
		};
	} catch (error) {
		console.error(error);

		return {
			props: {},
		};
	}
}
