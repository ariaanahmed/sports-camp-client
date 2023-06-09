import PopularClasses from "../../popularClasses/PopularClasses";
import TopInstructors from "../../topInstructors/TopInstructors";
import Banner from "../banner/Banner";
import JoinUs from "./joinus/JoinUs";

const Home = () => {
    return (
        <div>
           <Banner/>
           <PopularClasses/>
           <TopInstructors/>
           <JoinUs/>
        </div>
    );
};

export default Home;