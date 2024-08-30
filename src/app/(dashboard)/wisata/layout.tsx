import Sidebar from "@/components/sidebar/Sidebar";
import "mapbox-gl/dist/mapbox-gl.css";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className="flex max-h-screen max-w-screen w-full h-full overflow-hidden">
			<Sidebar />
			<div className="flex-grow h-full">{children}</div>
		</main>
	);
};

export default Layout;
