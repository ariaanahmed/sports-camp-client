import { FaBookReader, FaHome, FaSchool, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200  text-gray-600 uppercase font-bold">

                        {/* Sidebar content here */}
                        <li> <Link to="/"> <FaHome className="w-4 h-4"/> User Home</Link> </li>
                        <li> <Link to="/"> <FaBookReader className="w-4 h-4"/> My Classes</Link> </li>
                        <li><Link to='/'> <FaWallet className="w-4 h-4"/> Enrolled Classes </Link></li>
                        <div className="divider"></div>
                        <li><Link to='/'> <FaHome className="w-4 h-4"/>Home</Link></li>
                        <li><Link to='/classes'> <FaSchool className="w-4 h-4"/>Classes</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;