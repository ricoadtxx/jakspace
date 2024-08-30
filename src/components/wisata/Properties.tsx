import React, { useState } from "react";
import Input from "../ui/input";
import ModalDropdown from "../dropdown/ModalDropdown";
import Image from "next/image";
import { Button } from "../ui/button";

const Properties = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [reaction, setReaction] = useState<"like" | "dislike" | null>(null);
	const [isLoading, setIsLoading] = useState<"like" | "dislike" | null>(null);

	const handleToggleFilter = () => setIsFilterOpen((prev) => !prev);

	const filterOptions = [
		{ value: "", label: "Pilih", disabled: true },
		{ value: "Religi", label: "Religi" },
		{ value: "Sejarah", label: "Sejarah" },
		{ value: "Rekreasi", label: "Rekreasi" },
		{ value: "Alam", label: "Alam" },
	];

	const handleLikeClick = () => {
		if (isLoading) return;

		setIsLoading("like");
		setTimeout(() => {
			setReaction(reaction === "like" ? null : "like");
			setIsLoading(null);
		}, 500); 
	};

	const handleDislikeClick = () => {
		if (isLoading) return; 

		setIsLoading("dislike");
		setTimeout(() => {
			setReaction(reaction === "dislike" ? null : "dislike");
			setIsLoading(null);
		}, 500); 
	};

	return (
		<div className="relative flex flex-col gap-5">
			<div className="flex gap-2 px-2">
				<div className="w-1/3 flex justify-center items-center">
					<h1 className="w-full text-center">58 Properties</h1>
				</div>
				<div className="m-auto w-3/4">
					<Input
						type="text"
						placeholder="Search Place"
						className="extra-styles w-full rounded-sm"
					/>
				</div>
				<div className="flex flex-col w-1/6 justify-center items-center">
					<i
						className={`bx bx-filter-alt cursor-pointer bx-sm ${
							isFilterOpen
								? "rotate-180 transition duration-300"
								: "rotate-0 transition duration-300"
						}`}
						onClick={handleToggleFilter}
					/>
					<p>Filter</p>
				</div>
			</div>
			<div className="grid grid-cols-[3fr_4fr_2fr] gap-1 mt-5 max-h-screen overflow-hidden p-3">
				{/* Picture Start*/}
				<div className="flex gap-3">
					<div className="flex-grow">
						<Image
							src="/hero-img.png"
							width={1000}
							height={1000}
							alt=""
							className="rounded-md w-full h-full"
						/>
					</div>
				</div>
				{/* Picture End*/}

				{/* Informations Start */}
				<div className="flex flex-col gap-3">
					<div className="flex-grow">
						<div>
							<h1 className="text-lg">Taman Ancol</h1>
							<p className="text-sm">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
					<div className="flex-grow flex gap-5">
						<div className="flex items-center">
							<i className="bx bxs-user" />
							<p className="text-sm">10K</p>
						</div>
						<div className="flex items-center">
							<i className="bx bxs-wallet" />
							<p className="text-sm">15K/ticket</p>
						</div>
					</div>
				</div>
				{/* Informations End */}

				{/* Actions Start*/}
				<div className="flex flex-col gap-3 items-center py-1">
					<div className="flex-grow flex justify-between gap-2">
						<div className="flex flex-col items-center">
							<i
								className={`bx bx-sm cursor-pointer ${
									isLoading === "like"
										? "bx-loader bx-spin"
										: reaction === "like"
										? "bxs-like text-blue-600"
										: "bx-like"
								}`}
								onClick={handleLikeClick}
							/>
							<p className="text-center">17k</p>
						</div>
						<div className="flex flex-col items-center">
							<i
								className={`bx bx-sm cursor-pointer ${
									isLoading === "dislike"
										? "bx-loader bx-spin"
										: reaction === "dislike"
										? "bxs-dislike text-red-600"
										: "bx-dislike"
								}`}
								onClick={handleDislikeClick}
							/>
							<p className="text-center">16</p>
						</div>
					</div>
					<div className="flex-grow flex items-end">
						<Button type="button" className="h-5 py-3.5">
							Detail
						</Button>
					</div>
				</div>
				{/* Actions End*/}
			</div>
			<ModalDropdown
				title="Pilih Sesuai"
				subTitle="Jenis Wisata"
				isOpen={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
				options={filterOptions}
				defaultValue={""}
			/>
		</div>
	);
};

export default Properties;
