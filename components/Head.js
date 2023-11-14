import Head from 'next/head';

export const HeadElem = ({ metadata }) => (
	<Head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<title>{metadata.title}</title>
		<meta name="title" content={metadata.title} />
		<meta name="author" content="Mina Markham" />
		<meta name="description" content={metadata.description} />
		<meta name="robots" content="index, follow" />
		<meta name="generator" content="Next.js" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content={metadata.url} />
		<meta property="og:locale" content="en_US" />
		<meta property="og:title" content={metadata.title} />
		<meta property="og:description" content={metadata.openGraph.description} />
		<meta property="og:image" content={metadata.openGraph.image.src} />
		<meta property="og:image:alt" content={metadata.openGraph.image.alt} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content={metadata.twitter.site} />
		<meta name="twitter:creator" content="@minamarkham" />
		<meta name="twitter:url" content={metadata.url} />
		<meta name="twitter:title" content={metadata.twitter.title} />
		<meta name="twitter:description" content={metadata.twitter.description} />
		<meta name="twitter:image" content={metadata.twitter.image.src} />
		<meta name="twitter:image:alt" content={metadata.description} />
		<link rel="canonical" href={metadata.url} />
		<meta name="theme-color" content="#000000" />
		<link rel="manifest" href="/manifest.json" />
		<link rel="icon" href="/favicon.ico" sizes="any" />
		<link rel="icon" href="/icon.svg" type="image/svg+xml" />
		<link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>{' '}
	</Head>
);
