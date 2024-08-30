'use client'

import { useState } from "react";

const AddWisataForm = () => {
	const [nama, setNama] = useState("");
	const [jenis, setJenis] = useState("");
	const [coordinate, setCoordinate] = useState({ lat: "", lng: "" });
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		// Validasi data
		if (!nama || !jenis || !coordinate.lat || !coordinate.lng) {
			setError("All fields are required");
			return;
		}

		try {
			// Kirim data ke API
			const response = await fetch("/api/wisata", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nama,
					jenis,
					coordinate: {
						lat: parseFloat(coordinate.lat),
						lng: parseFloat(coordinate.lng),
					},
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to create wisata");
			}

			const result = await response.json();
			setSuccess("Wisata created successfully!");
			setNama("");
			setJenis("");
			setCoordinate({ lat: "", lng: "" });
			setError("");
		} catch (error) {
			setError("An error occurred while creating wisata");
		}
	};

	return (
		<div>
			<h1>Create Wisata</h1>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{success && <p style={{ color: "green" }}>{success}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nama">Nama:</label>
					<input
						id="nama"
						type="text"
						value={nama}
						onChange={(e) => setNama(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="jenis">Jenis:</label>
					<input
						id="jenis"
						type="text"
						value={jenis}
						onChange={(e) => setJenis(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="lat">Latitude:</label>
					<input
						id="lat"
						type="text"
						value={coordinate.lat}
						onChange={(e) =>
							setCoordinate((prev) => ({ ...prev, lat: e.target.value }))
						}
					/>
				</div>
				<div>
					<label htmlFor="lng">Longitude:</label>
					<input
						id="lng"
						type="text"
						value={coordinate.lng}
						onChange={(e) =>
							setCoordinate((prev) => ({ ...prev, lng: e.target.value }))
						}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddWisataForm;
