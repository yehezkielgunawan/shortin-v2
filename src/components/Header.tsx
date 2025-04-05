"use client";
import useIsClient from "@/hooks/useIsClient";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
	const { setTheme, theme } = useTheme();
	const isClient = useIsClient();

	return (
		<header className="bg-base-200">
			<nav className="container mx-auto lg:max-w-5xl">
				<div className="navbar px-0">
					<div className="flex-1">
						<a href="/">NextJS 14 Template</a>
					</div>
					<div className="flex-none">
						<ul className="menu menu-horizontal">
							<li>
								<a
									href="https://github.com/yehezkielgunawan/next14-starter"
									target="_blank"
									className="btn btn-ghost btn-sm"
									rel="noreferrer"
								>
									<FaGithub size={20} />
								</a>
							</li>
							<li>
								{isClient ? (
									<label className="swap swap-rotate btn btn-ghost btn-sm">
										<input
											checked={theme === "dim"}
											type="checkbox"
											className="theme-controller"
											value="dim"
											onChange={(e) =>
												setTheme(e.target.checked ? "dim" : "nord")
											}
										/>

										<IoSunny size={20} className="swap-off" />
										<IoMoon size={20} className="swap-on" />
									</label>
								) : (
									<div className="skeleton h-[34px] w-[50px] md:h-8" />
								)}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
