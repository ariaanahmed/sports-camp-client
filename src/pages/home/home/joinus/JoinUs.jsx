import pImage from '../../../../assets/bgimage/racket-and-shuttlecock.jpg';


const JoinUs = () => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${pImage})`, backgroundSize: 'cover', height: '80vh', backgroundRepeat: 'no-repeat' }} className='bg-fixed'>
                <div className="flex flex-col items-start justify-center h-full px-8">
                    <h2 className="text-4xl text-white font-bold"><span className='text-red-600 mt-5'>JOIN US NOW</span> & GET FREE <br />TRAINING!</h2>
                    <p className="text-white mt-4 md:w-6/12">
                        Join us now and get free training in our exciting sports classes! Discover the thrill of athletic excellence and unlock your full potential. Dont miss out on this incredible opportunity to enhance your skills and achieve greatness. Sign up today!
                    </p>
                    <button className="btn btn-outline btn-warning mt-4 mb-10">Join Now</button>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
