import { useEffect, useState } from "react";
import JsonData from "../../../data/data.json";
import { SearchBar } from "../../common/SearchBar";
import { BusinessPhilosophy } from "./BusinessPhilosophy";
import { Header } from "./Header";
import { News } from "./News";
import { Prizes } from "./Prizes";
import { Projects } from "./Projects";
import { Testimonials } from "./Testimonials";

function HomePage(props) {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<div>
			<Header data={landingPageData.Header} />
			<SearchBar />
			<Projects data={landingPageData.Projects} />
			<BusinessPhilosophy data={landingPageData.About} />
			<News data={landingPageData.News} />
			<Prizes data={landingPageData.Prizes} />
			<Testimonials data={landingPageData.Testimonials} />
		</div>
	);
}

export default HomePage;
