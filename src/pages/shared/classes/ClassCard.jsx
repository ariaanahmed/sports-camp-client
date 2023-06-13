import { useContext } from "react";
import { AuthContext } from "../../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useBooked from "../../../hooks/useBooked";

const ClassCard = ({ classes }) => {
    console.log(classes)
    const { name, image, price, instructor_name, available_seats, _id } = classes;
    const { user } = useContext(AuthContext);
    const [, refetch] = useBooked();
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)

    const handleBookNow = (classes) => {
        console.log(classes)
        if (user && user.email) {
            const bookedClass = { classItemId: _id, name, image, price, instructor_name, available_seats, email: user.email }
            fetch('https://assignment-12-server-flax.vercel.app/bookedClasses', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedClass)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'You have Booked a class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Login Now',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div className={`card w-full ${available_seats === 0 ? 'bg-red-500' : 'bg-base-100'} shadow-xl border`}>
                <figure><img src={image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Instructor: {instructor_name}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Price: {price}</p>

                    {user && user.email ? (
                        available_seats > 0 ? (
                            <div className="card-actions justify-start">
                                <button onClick={handleBookNow} className="btn btn-primary">Book Now</button>
                            </div>
                        ) : (
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary" disabled>No Available Seats</button>
                            </div>
                        )
                    ) : (
                        <Link to="/login">
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Login to Book</button>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>

    );
};

export default ClassCard;