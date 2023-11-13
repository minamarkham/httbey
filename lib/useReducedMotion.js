import { useState, useEffect } from 'react';

const useReducedMotion = (defaultVal = true) => {
	// Local state to store the reduced motion setting.
	const [reducedMotion, setReducedMotion] = useState(defaultVal);

	// Callback for media query cahnge events.
	function queryCnangeHandler(event) {
		// Set the state to the value of the media query.
		setReducedMotion(event.target.matches);
	}

	useEffect(() => {
		// Grab the reduced motion media query,
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		if (mediaQuery) {
			// Set the state to the value of the media query.
			setReducedMotion(mediaQuery.matches);

			// Lissten for changes in the media query.
			mediaQuery.addEventListener('change', queryCnangeHandler);

			// Remove the event listener when the component unmounts.
			return () => mediaQuery.removeEventListener('change', queryCnangeHandler);
		}
	}, []);

	return reducedMotion;
};

export default useReducedMotion;
