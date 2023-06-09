import PopularClasses from "../../popularClasses/PopularClasses";
import TopInstructors from "../../topInstructors/TopInstructors";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div>
           <Banner/>
           <PopularClasses/>
           <TopInstructors/>
        </div>
    );
};

export default Home;