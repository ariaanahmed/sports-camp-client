import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../src/assets/icons/logo.png';
import { FaBookmark } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';
import useBooked from '../../../hooks/useBooked';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [booked] = useBooked()

    const handleLogOut = () => {
        logOut().then(() => { }).catch((error) => console.log(error.message));
    }

    const navbarLi = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li className='border rounded-md ml-2'><NavLink to='/dashboard/myclasses'>
            <FaBookmark className='w-4 h-4'></FaBookmark> +{booked?.length || 0}
        </NavLink></li>
    </>

    return (
        <div>
            <div className="navbar max-w-screen-2xl fixed z-10 bg-gray-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                            {navbarLi}
                        </ul>
                    </div>
                    <span>
                        <img title='logo' className='w-10 h-10 bg-white p-[1px] rounded-full' src={logo} alt="" />
                    </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navbarLi}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <img title={user?.displayName} className='w-10 h-10 mr-2 rounded-full bg-white p-[1px]' src={user?.photoURL} alt="user-icon" />
                                <button onClick={handleLogOut} className='btn btn-sm'>Log out</button>
                            </>
                            :
                            <>
                                <Link to="/login">
                                    <button className='btn btn-sm'>Login</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;