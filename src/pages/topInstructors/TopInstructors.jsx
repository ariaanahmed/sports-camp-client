import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import IntructorCard from "./IntructorCard";

const TopInstructors = () => {
   const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-flax.vercel.app/teachers').then((res) => res.json()).then((data) => {
            const popularInstuctors = data.filter((instructor) => instructor.rank === 'top')
            setInstructors(popularInstuctors);
        })
    }, [])
    return (
        <section>
            <SectionTitle heading={"Top Instructors"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {
                    instructors.map((instructor) => <IntructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></IntructorCard>)
                }
            </div>
        </section>
    );
};

export default TopInstructors;