import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserGraduate, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllStudents = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-12-server-flax.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://assignment-12-server-flax.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        }).then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

        const handleMakeInstructor = (user) => {
            fetch(`https://assignment-12-server-flax.vercel.app/users/instructor/${user._id}`, {
                method: 'PATCH'
            }).then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name} is an instructor Now!`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    return (
        <div>
            <Helmet>
                <title>All Students</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-info"> <FaUserShield className="h-4 w-4" />
                                            </button>
                                    }
                                </td>
                                <td>
                                    {
                                        user.instructor === 'instructor' ? 'instructor' :
                                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-secondary"> <FaUserGraduate className="h-4 w-4" />
                                            </button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllStudents;