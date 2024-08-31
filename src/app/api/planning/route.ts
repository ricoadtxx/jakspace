// app/api/wisata/route.js
import { NextResponse } from "next/server";
import { Pool } from "pg"; // PostgreSQL client

// Set up PostgreSQL connection pool
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export async function GET() {
	try {
		// Query the database
		const result = await pool.query("SELECT * FROM wisata");

		// Return the data as JSON response
		return NextResponse.json(result.rows);
	} catch (error) {
		console.error("Error fetching data:", error);
		return NextResponse.json(
			{ error: "Failed to fetch data" },
			{ status: 500 }
		);
	}
}
