import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassCard from './ClassCard';
const Classes = () => {
    const [allClasses, setAllClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes').then((res) => res.json()).then((data) => {
            setAllClasses(data);
        })
    }, [])
    return (
        <div className='pt-24'>
            <Helmet>
                <title>Classes</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-4">
                {
                    allClasses.map((classes) => <ClassCard
                        key={classes._id}
                        classes={classes}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;