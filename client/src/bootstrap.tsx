import "~/css/index.scss";

import { initializeTranslationService } from "./utilities/react-i18next";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { StrictMode } from "react";

initializeTranslationService();

createRoot(document.getElementById("app") as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
