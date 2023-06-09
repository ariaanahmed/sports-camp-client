import { Helmet } from "react-helmet-async";
import PopularClasses from "../../popularClasses/PopularClasses";
import TopInstructors from "../../topInstructors/TopInstructors";
import Banner from "../banner/Banner";
import JoinUs from "./joinus/JoinUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <TopInstructors />
            <JoinUs />
        </div>
    );
};

export default Home;