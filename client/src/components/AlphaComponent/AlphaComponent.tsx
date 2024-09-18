import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

import { AlphaModuleProps } from "./types";

const AlphaLazyComponent = lazy(() => import("alphaModule/SamplePage"));

export const AlphaComponent = () => {
	const navigate = useNavigate();

	const props: AlphaModuleProps = {
		sampleString: "This is alpha module",
		onButtonClick: () => navigate("/page-beta"),
	};

	return (
		<ErrorBoundary fallback={<div>An error has occurred</div>}>
			<Suspense fallback={<div>Loading...</div>}>
				<AlphaLazyComponent {...props} />
			</Suspense>
		</ErrorBoundary>
	);
};
