import MapBox from "@/components/map/MapBox";
import AddWisataForm from "@/components/wisata/AddWisataForm";

const page = () => {
	return (
		<div className="max-h-screen max-w-screen border-black border">
			<MapBox />
			{/* <AddWisataForm /> */}
		</div>
	);
};

export default page;
