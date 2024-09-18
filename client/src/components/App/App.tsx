import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "~/pages/HomePage/HomePage";
import { AlphaComponent } from "../AlphaComponent/AlphaComponent";
import { BetaComponent } from "../BetaComponent/BetaComponent";
import { Navbar } from "../Navbar/Navbar";
import { GammaComponent } from "../GammaComponent/GammaComponent";

export const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navbar />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "/page-alpha/*",
					element: <AlphaComponent />,
				},
				{
					path: "/page-beta/*",
					element: <BetaComponent />,
				},
				{
					path: "/page-gamma/*",
					element: <GammaComponent />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};
