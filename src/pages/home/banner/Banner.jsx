import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../../src/assets/sliderImgs/slide1.jpg';
import slider2 from '../../../../src/assets/sliderImgs/slide2.jpg';
import slider3 from '../../../../src/assets/sliderImgs/slide3.jpg';
import slider4 from '../../../../src/assets/sliderImgs/slide4.jpg';
import slider5 from '../../../../src/assets/sliderImgs/slide5.jpg';
import slider6 from '../../../../src/assets/sliderImgs/slide6.jpg';

const Banner = () => {
    return (
        <div className="text-center">
            <Carousel dynamicHeight="true" showThumbs={false}>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                <img src={slider2} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
                <div>
                    <img src={slider4} />
                </div>
                <div>
                    <img src={slider5} />
                </div>
                <div>
                    <img src={slider6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;