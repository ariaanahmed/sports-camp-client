import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [allTeachers, setAllTeachers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/teachers').then((res) => res.json()).then((data) => {
            setAllTeachers(data)
        })
    }, [])
    return (
        <div className="pt-20">
            <Helmet>
                <title>Instructor</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTeachers.map((teacher, index) => <tr key={teacher._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={teacher.image} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='font-bold'>{teacher.name}</td>
                            <td>{teacher.email}</td>
                        </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;