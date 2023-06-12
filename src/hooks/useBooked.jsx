import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBooked = () => {
    const {user} = useContext(AuthContext);

    const { refetch, data: bookedClass = [] } = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookedClasses?email=${user.email}`)
            return res.json();
        }
    })

    return[bookedClass, refetch]

};

export default useBooked;