import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBooked = () => {
    const {user} = useContext(AuthContext);

    const token = localStorage.getItem('access-token')

    const { refetch, data: bookedClass = [] } = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookedClasses?email=${user?.email}`,{headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        }
    })

    return[bookedClass, refetch]

};

export default useBooked;