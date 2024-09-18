import { useCallback, useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const GammaComponent = () => {
	const gammaComponentRef = useRef<HTMLDivElement>(null);

	const [isLoading, setIsLoading] = useState(true);

	const loadModule = useCallback(async () => {
		if (gammaComponentRef.current) {
			setIsLoading(true);

			const { default: mount } = await import("gammaModule/App");

			mount(gammaComponentRef.current);

			setIsLoading(false);
		}
	}, [gammaComponentRef.current]);

	useEffect(() => {
		loadModule();
	}, [loadModule]);

	return (
		<ErrorBoundary fallback={<div>An error has occurred</div>}>
			{isLoading && <div>Loading...</div>}
			<div ref={gammaComponentRef} />
		</ErrorBoundary>
	);
};
