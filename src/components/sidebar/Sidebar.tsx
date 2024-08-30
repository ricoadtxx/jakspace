"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Properties from "../wisata/Properties";
import Nearby from "../wisata/Nearby";
import { cn } from "@/lib/utils";

const Sidebar = () => {
	const [activeSection, setActiveSection] = useState("properties");
	const pathname = usePathname();

	const handleClick = (section: string) => {
		setActiveSection(section);
	};

	return (
		<section className="sticky left-0 top-0 flex w-fit flex-col justify-between border-r border-gray-200 bg-[#eeeeee] pt-7 text-white max-md:hidden 2xl:w-[450px]">
			<nav className="flex flex-col gap-4 text-black max-h-screen">
				<Link
					href="/"
					className="mb-3 cursor-pointer flex items-center gap-2 px-6 "
				>
					<Image
						src="/icons/logo.svg"
						width={34}
						height={34}
						alt="Horizon logo"
						className="size-[24px] max-xl:size-14"
					/>
					<h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
						JAKSPACE
					</h1>
				</Link>
				<div className="mb-2 flex justify-center pb-5 gap-20 border-b-2 px-8">
					<button
						onClick={() => handleClick("properties")}
						className={cn(
							"font-sans px-10 py-1 border transition-colors duration-300",
							{
								"rounded-sm bg-[#d6d6d6] [box-shadow:inset_2px_2px_5px_#6f6f6f,_inset_-5px_-5px_10px_#ffe8e8]":
									activeSection === "properties",
								"border-gray-600 rounded-sm": activeSection !== "properties",
								"border-transparent": activeSection === "properties",
							}
						)}
					>
						Properties
					</button>
					<button
						onClick={() => handleClick("nearby")}
						className={cn(
							"font-sans px-10 py-1 border transition-colors duration-300",
							{
								"rounded-sm bg-[#d6d6d6] [box-shadow:inset_2px_2px_5px_#6f6f6f,_inset_-5px_-5px_10px_#ffe8e8]":
									activeSection === "nearby",
								"border-gray-600 rounded-sm": activeSection !== "nearby",
								"border-transparent": activeSection === "nearby",
							}
						)}
					>
						Nearby
					</button>
				</div>
				<div>
					{activeSection === "properties" && (
						<div>
							<Properties />
						</div>
					)}
					{activeSection === "nearby" && (
						<div>
							<Nearby />
						</div>
					)}
				</div>
			</nav>
		</section>
	);
};

export default Sidebar;
