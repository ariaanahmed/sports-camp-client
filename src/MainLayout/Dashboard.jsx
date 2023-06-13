import { FaBars, FaBookReader, FaHome, FaMoneyBill, FaSchool, FaUserClock, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useBooked from "../hooks/useBooked";

const Dashboard = () => {
    // TODO: load data from the server

    const isAdmin = true;

    const [booked] = useBooked()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <label htmlFor="my-drawer-2" className="btn bg-gray-200 drawer-button lg:hidden"> <FaBars className="w-6 h-6 ml-auto" /> </label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-gray-600 uppercase font-bold">

                        {
                            isAdmin ?
                                <>
                                    {/* Sidebar content here */}
                                    
                                    <li> <NavLink to="/dashboard/adminhome"> <FaHome className="w-4 h-4" />Admin Home </NavLink></li>
                                    
                                    <li><NavLink to='/dashboard/allstudents'> 
                                    <FaUserClock className="w-4 h-4" />All Students</NavLink></li>

                                    <li><NavLink to='/dashboard/addaclass'> 
                                    <FaWallet className="w-4 h-4" />Add a Class</NavLink></li>

                                    <li> <NavLink to='/dashboard/myclassinst'> <FaBookReader/> My Classes</NavLink> </li>
                                </>
                                :
                                <>
                                    {/* Sidebar content here */}
                                    <li> <NavLink to="/dashboard/myclasses"> <FaBookReader className="w-4 h-4" /> My Classes <div className="badge badge-warning">+{booked?.length || 0}</div></NavLink> </li>

                                    <li><NavLink to='/dashboard/enrolledclasses'> <FaWallet className="w-4 h-4" /> Enrolled Classes </NavLink></li>
                                    
                                    <li><NavLink to='/dashboard/paymenthistory'> <FaMoneyBill className="w-4 h-4" /> Payment History </NavLink></li>
                                </>
                        }


                        <div className="divider"></div>

                        <li><NavLink to='/'> <FaHome className="w-4 h-4" />Home</NavLink></li>
                        <li><NavLink to='/classes'> <FaSchool className="w-4 h-4" />Classes</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;