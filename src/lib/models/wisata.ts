// models/wisata.ts
export interface Wisata {
	id: string;
	nama: string;
	jenis: string;
	coordinate: {
		type: string;
		coordinates: [number, number]; // Assumes GeoJSON format [lng, lat]
	};
	createdAt: string;
	updatedAt: string;
}
