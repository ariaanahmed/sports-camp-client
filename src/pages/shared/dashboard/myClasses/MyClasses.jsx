import { Helmet } from "react-helmet-async";
import useBooked from "../../../../hooks/useBooked";

const MyClasses = () => {
    const [booked] = useBooked();
    const total = booked.reduce((sum, bookedClass) => bookedClass.price + sum, 0)
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
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booked.map((item, index) => <tr 
                                    key={item._id}
                                >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold'>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td>
                                    <button className="btn btn-info btn-sm">Delete</button>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;