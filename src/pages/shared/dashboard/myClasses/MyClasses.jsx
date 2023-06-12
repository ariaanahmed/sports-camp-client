import { Helmet } from "react-helmet-async";
import useBooked from "../../../../hooks/useBooked";

const MyClasses = () => {
    const [booked] = useBooked();
    const total = booked.reduce( (sum, bookedClass) => bookedClass.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Booked Classes</title>
            </Helmet>
            <div className="capitalize font-semibold h-[60px] md:text-xl items-center flex justify-evenly text-center border-b border-l bg-gray-100 gap-5">
                <p className="bg-gray-50 p-2 rounded-md">Items: {booked.length}</p>
                <p>Price: {total}</p>
                <button className="btn btn-warning btn-sm">pay</button>
            </div>
        </div>
    );
};

export default MyClasses;