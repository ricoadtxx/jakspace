import React from "react";
import { Button } from "../ui/button";

const Modal = ({ isOpen, onClose, property }: any) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white rounded-lg p-5 w-96 relative">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold">{property.name}</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-800"
					>
						<i className="bx bx-x bx-sm"></i>
					</button>
				</div>
				<div className="mb-4">
					<p>{property.description}</p>
					<p className="mt-2">Price: {property.price}</p>
					<p>Visitors: {property.visitors}</p>
				</div>
				<div className="flex justify-end">
					<Button type="button" onClick={onClose} className="h-5 py-3.5">
						Close
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
