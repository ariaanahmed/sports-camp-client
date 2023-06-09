import Aos from "aos";
import { useEffect } from "react";

const IntructorCard = ({ instructor }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <div className="card w-full bg-base-100 shadow-xl border">
                <figure className="p-8">
                    <img src={instructor.image} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor.name}</h2>
                    <p className="break-all">Email: {instructor.email}</p>
                </div>
            </div>
        </div>
    );
};

export default IntructorCard;