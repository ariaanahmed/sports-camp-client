import topClassImg1 from '../../../src/assets/topClass/c1.jpg';
import topClassImg2 from '../../../src/assets/topClass/c2.jpg';
import topClassImg3 from '../../../src/assets/topClass/c3.jpg';
import topClassImg4 from '../../../src/assets/topClass/c4.jpg';
import topClassImg5 from '../../../src/assets/topClass/c5.jpg';
import topClassImg6 from '../../../src/assets/topClass/c6.jpg';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SectionTitle from '../../components/sectionTitle/SectionTitle';

const PopularClasses = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 8,
        },
    })
    return (
        <section>
            <SectionTitle heading={"Popular Classes"}></SectionTitle>
            <div className='my-5'>
                <div ref={sliderRef} className="keen-slider">
                    {/* top class card one */}
                    <div className="keen-slider__slide number-slide1">
                        <div className="card w-full bg-base-100 shadow-xl border">
                            <figure><img src={topClassImg1} className='pt-6 p-5' alt="snow-hockey" /></figure>
                            <div>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <span className='uppercase font-bold px-3'>Football</span>
                                        <div className="badge badge-secondary font-bold">TOP</div>
                                    </div>
                                    <div className="badge badge-outline ml-auto hidden md:block font-semibold">Student: 95</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* top class card two */}
                    <div className="keen-slider__slide number-slide2">
                        <div className="card w-full bg-base-100 shadow-xl border">
                            <figure><img src={topClassImg2} className='pt-6 p-5' alt="snow-hockey" /></figure>
                            <div>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <span className='uppercase font-bold px-3'>Hockey</span>
                                        <div className="badge badge-secondary font-bold">TOP</div>
                                    </div>
                                    <div className="badge badge-outline ml-auto hidden md:block font-semibold">Student: 55</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* top class card three */}
                    <div className="keen-slider__slide number-slide3">
                        <div className="card w-full bg-base-100 shadow-xl border">
                            <figure><img src={topClassImg3} className='pt-6 p-5' alt="snow-hockey" /></figure>
                            <div>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <span className='uppercase font-bold px-3'>Rugby</span>
                                        <div className="badge badge-secondary font-bold">TOP</div>
                                    </div>
                                    <div className="badge badge-outline ml-auto hidden md:block font-semibold">Student: 80</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* top class card four */}
                    <div className="keen-slider__slide number-slide4">
                        <div className="card w-full bg-base-100 shadow-xl border">
                            <figure><img src={topClassImg4} className='pt-6 p-5' alt="snow-hockey" /></figure>
                            <div>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <span className='uppercase font-bold px-3'>Baseball</span>
                                        <div className="badge badge-secondary font-bold">TOP</div>
                                    </div>
                                    <div className="badge badge-outline ml-auto hidden md:block font-semibold">Student: 50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* top class card five */}
                    <div className="keen-slider__slide number-slide5">
                        <div className="card w-full bg-base-100 shadow-xl border">
                            <figure><img src={topClassImg5} className='pt-6 p-5' alt="snow-hockey" /></figure>
                            <div>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <span className='uppercase font-bold px-3'>Cricket</span>
                                        <div className="badge badge-secondary font-bold">TOP</div>
                                    </div>
                                    <div className="badge badge-outline ml-auto hidden md:block font-semibold">Student: 99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* top class card six */}
                    <div className="keen-slider__slide number-slide6">
                        <div className="card w-full bg-base-100 shadow-xl border">
                            <figure><img src={topClassImg6} className='pt-6 p-5' alt="snow-hockey" /></figure>
                            <div>
                                <div className='flex items-center p-5'>
                                    <div>
                                        <span className='uppercase font-bold px-3'>Badminton</span>
                                        <div className="badge badge-secondary font-bold">TOP</div>
                                    </div>
                                    <div className="badge badge-outline ml-auto hidden md:block font-semibold">Student: 40</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;