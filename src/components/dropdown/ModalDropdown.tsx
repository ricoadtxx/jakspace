// components/ModalDropdown.tsx
import React from "react";

type Option = {
	value: string;
	label: string;
	disabled?: boolean; // Tambahkan properti disabled
};

type ModalDropdownProps = {
	title: string;
	subTitle: string;
	isOpen: boolean;
	onClose: () => void;
	options: Option[];
	defaultValue: string; // Tambahkan prop untuk nilai default
};

const ModalDropdown: React.FC<ModalDropdownProps> = ({
	title,
	subTitle,
	isOpen,
	onClose,
	options,
	defaultValue,
}) => {
	if (!isOpen) return null;

	return (
		<div className="absolute top-12 right-0 bg-white border border-gray-300 p-4 rounded shadow-lg z-10 w-1/2 mx-5">
			<button
				onClick={onClose}
				className="absolute top-2 right-2 text-xl font-bold"
			>
				&times;
			</button>
			<h2 className="text-xl mb-4">{title}</h2>
			<p className="text-md mb-2">{subTitle}</p>
			<form>
				<label className="block mb-2">
					<select className="border p-2 w-full" defaultValue={defaultValue}>
						{options.map((option) => (
							<option
								key={option.value}
								value={option.value}
								disabled={option.disabled}
							>
								{option.label}
							</option>
						))}
					</select>
				</label>
				<button
					type="button"
					className="mt-4 bg-blue-500 text-white p-2 rounded"
					onClick={onClose}
				>
					Apply Filters
				</button>
			</form>
		</div>
	);
};

export default ModalDropdown;
