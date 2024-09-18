import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {

	return (
		<div className="host-flex host-flex-col host-gap-4">
			<nav className="host-block host-w-full host-px-4 host-py-2 host-bg-whitehost-bg-opacity-90 host-sticky host-shadow lg:host-px-8 lg:host-py-3 host-backdrop-blur-lg host-backdrop-saturate-150 host-z-[9999]">
				<div className="host-container host-flex host-flex-wrap host-items-center host-justify-start host-mx-auto host-text-slate-800">
					<Link
						to="/"
						className="host-mr-4 host-block host-cursor-pointer host-py-1.5 host-text-base host-text-slate-800 host-font-semibold"
					>
						MFE Host Demo
					</Link>
					<div className="host-hidden lg:host-block">
						<ul className="host-flex host-flex-col host-gap-2 host-mt-2 host-mb-4 lg:host-mb-0 lg:host-mt-0 lg:host-flex-row lg:host-items-center lg:host-gap-6">
							<li className="host-flex host-items-center host-p-1 host-text-sm host-gap-x-2 host-text-slate-600">
								<Link to="/page-alpha" className="host-flex host-items-center">
									Alpha
								</Link>
							</li>
							<li className="host-flex host-items-center host-p-1 host-text-sm host-gap-x-2 host-text-slate-600">
								<Link to="/page-beta" className="host-flex host-items-center">
									Beta
								</Link>
							</li>
							<li className="host-flex host-items-center host-p-1 host-text-sm host-gap-x-2 host-text-slate-600">
								<Link to="/page-gamma" className="host-flex host-items-center">
									Gamma
								</Link>
							</li>
						</ul>
					</div>
					<button
						className="host-relative host-ml-auto host-h-6 host-max-h-[40px] host-w-6 host-max-w-[40px] host-select-none host-rounded-lg host-text-center host-align-middle host-text-xs host-font-medium host-uppercase host-text-inherit host-transition-all hover:host-bg-transparent focus:host-bg-transparent active:host-bg-transparent disabled:host-pointer-events-none disabled:host-opacity-50 disabled:host-shadow-none lg:host-hidden"
						type="button"
					>
						<span className="host-absolute host-transform -host-translate-x-1/2 -host-translate-y-1/2 host-top-1/2 host-left-1/2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="host-w-6 host-h-6"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</span>
					</button>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};
