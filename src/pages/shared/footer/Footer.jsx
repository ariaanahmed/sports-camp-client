import moment from 'moment/moment';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer style={{marginTop: 'auto'}}>
            <div className="footer p-10 bg-gray-900 text-neutral-content">
                <div>
                    <p className='text-3xl font-semibold'>Assignment12</p>
                    <p className='font-normal'>By Ariaan Ahmed<br />MERN Stack Developer</p>
                </div>
                <div>
                    <span className="font-semibold uppercase text-white">Find us on</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com/' target='_blank'>
                            <FaFacebook className='w-6 h-6' />
                        </Link>
                        <Link to='https://www.twitter.com/' target='_blank'>
                            <FaTwitter className='w-6 h-6' />
                        </Link>
                        <Link to='https://www.instagram.com/' target='_blank'>
                            <FaInstagram className='w-6 h-6' />
                        </Link>
                        <Link to='https://www.youtube.com/' target='_blank'>
                            <FaYoutube className='w-6 h-6' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-center p-4 bg-gray-900 w-full border-t">
                <p className='text-white'>Copyright © {moment().format('Do MMMM YYYY')} All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;