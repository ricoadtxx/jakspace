import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center py-5 px-10 border-b-2 fixed w-full">
			<div className="flex-1 flex items-center justify-start gap-10">
				<Link href="/">
					<Image src="/next.svg" width={116} height={43} alt="logo" />
				</Link>
			</div>
			<div>
				<ul className="xl:flex hidden text-lg font-medium gap-7">
					{NavLinks.map((link) => (
						<Link href={link.href} key={link.text}>
							{link.text}
						</Link>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
