const ThumbnailGrid = ({ children }) => {
	return (
		<ul className="status__grid">
			{children.map((el, idx) => (
				<li key={idx}>{el}</li>
			))}
		</ul>
	);
};

export default ThumbnailGrid;
