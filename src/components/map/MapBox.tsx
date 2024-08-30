"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Map, {
	Marker,
	FullscreenControl,
	GeolocateControl,
	NavigationControl,
	ScaleControl,
} from "react-map-gl";

const MapBox = () => {
	const [viewport, setViewport] = useState({
		latitude: -6.199038337305248,
		longitude: 106.89610474368924,
		zoom: 11,
	});

	const [error, setError] = useState<string | null>(null);
	const [locations, setLocations] = useState<any[]>([]);

	useEffect(() => {
		fetch("/api/wisata")
			.then((response) => response.json())
			.then((data) => {
				console.log("Fetched data:", data); // Log data for debugging
				setLocations(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setError("Error fetching data");
			});
	}, []);

	const handleViewportChange = (nextViewport: any) => {
		setViewport(nextViewport);
	};

	return (
		<div className="w-screen h-screen z-10">
			<Map
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
				initialViewState={viewport}
				mapStyle="mapbox://styles/mapbox/streets-v12"
				style={{ width: "100%", height: "100%" }}
				onMove={(event) => handleViewportChange(event.viewState)}
			>
				<FullscreenControl position="top-left" />
				<GeolocateControl position="top-left" />
				<NavigationControl position="top-left" />
				<ScaleControl position="bottom-left" />

				{/* Render markers with corrected latitude and longitude */}
				{locations.length > 0 ? (
					locations.map((location: any) => {
						// Log location data for debugging
						console.log("Location data:", location);

						// Extract and validate coordinates
						const lng = parseFloat(location.coordinate.coordinates[0]); // Longitude
						const lat = parseFloat(location.coordinate.coordinates[1]); // Latitude

						if (
							isNaN(lat) ||
							isNaN(lng) ||
							lat < -90 ||
							lat > 90 ||
							lng < -180 ||
							lng > 180
						) {
							console.error(`Invalid coordinate: lat=${lat}, lng=${lng}`);
							return null; // Skip rendering this marker
						}

						console.log(`Rendering marker at lat=${lat}, lng=${lng}`); // Log marker coordinates

						return (
							<Marker key={location.id} latitude={lat} longitude={lng}>
								<div className="w-4 h-4 bg-red-500 rounded-full"></div>
							</Marker>
						);
					})
				) : (
					<div>Loading...</div>
				)}

				{error && <div>{error}</div>}
			</Map>
		</div>
	);
};

export default MapBox;
