import { Helmet } from "react-helmet-async";
import useBooked from "../../../../hooks/useBooked";
import Swal from "sweetalert2";

const MyClasses = () => {
    const [booked, refetch] = useBooked();
    const total = booked.reduce((sum, bookedClass) => bookedClass.price + sum, 0)

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-flax.vercel.app/bookedClasses/${item._id}`, {
                    method: 'DELETE'
                }).then((res) => res.json()).then((data) => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }

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
                                        <button onClick={() => handleDelete(item)} className="btn btn-info btn-sm">Delete</button>
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