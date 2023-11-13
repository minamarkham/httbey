import PlayButton from './PlayButton';

const Thumbnail = ({ status, reducedMotion = false }) => (
	<>
		{reducedMotion ? (
			<img src={`/media/${status.code}.jpg`} alt="" className="status__image" />
		) : (
			<video
				className="video"
				title={status.desc}
				autoPlay
				loop
				muted
				playsInline
				poster={`/media/${status.code}.jpg`}
			>
				<source src={`/media/${status.code}.webm`} type="video/webm" />
				<source src={`/media/${status.code}.mp4`} type="video/mp4" />
			</video>
		)}
		<div className="status__overlay">
			<span className="status__label">
				{status.code} {status.message}
			</span>
		</div>
	</>
);

export const StatusVideo = ({ status, showLabel = true, showSource = false }) => (
	<div className="status__media">
		<video
			className="status__video"
			title={status.desc}
			autoPlay
			loop
			muted
			playsInline
			poster={`/media/${status.code}.jpg`}
			height={465}
		>
			<source src={`/media/${status.code}.webm`} type="video/webm" />
			<source src={`/media/${status.code}.mp4`} type="video/mp4" />
		</video>
		<button onClick={handleClick} className="play__button">
			<PlayButton />
		</button>
		{showSource && status.source !== '' && (
			<p className="status__label status__source">
				<Link href={status.source}>Source</Link>
			</p>
		)}
	</div>
);

export default Thumbnail;

function handleClick() {
	const pause = document.getElementById('pause');
	const play = document.getElementById('play');
	pause.classList.toggle('active');
	play.classList.toggle('active');
}
