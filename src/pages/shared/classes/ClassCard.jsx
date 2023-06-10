const ClassCard = ({ classes }) => {
    console.log(classes)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl border">
                <figure><img src={classes.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{classes.name}</h2>
                    <p>Instructor: {classes.instructor_name}</p>
                    <p>Instructor: {classes.available_seats}</p>
                    <p>Price: {classes.price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;