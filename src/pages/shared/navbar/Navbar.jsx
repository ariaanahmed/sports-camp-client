import { Link } from 'react-router-dom';
import logo from '../../../../src/assets/icons/logo.png';
import { } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {}).catch((error) => console.log(error.message));
    }

    const navbarLi = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
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
                        <img title='logo' className='w-10 h-10' src={logo} alt="" />
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