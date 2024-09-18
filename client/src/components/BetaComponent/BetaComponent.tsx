import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BetaModuleProps } from "./types";

const BetaLazyComponent = lazy(() => import("betaModule/SamplePage"));

export const BetaComponent = () => {
	const props: BetaModuleProps = {
		basePath: "/page-beta",
		sampleString: "This is beta module",
		onSampleEvent: (sampleParam: string) => {
			console.log("Beta module", sampleParam);
		},
	};

	return (
		<ErrorBoundary fallback={<div>An error has occurred</div>}>
			<Suspense fallback={<div>Loading...</div>}>
				<BetaLazyComponent {...props} />
			</Suspense>
		</ErrorBoundary>
	);
};
