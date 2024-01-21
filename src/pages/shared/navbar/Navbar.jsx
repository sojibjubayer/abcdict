import { Link, NavLink } from "react-router-dom";
import navbarLogo from '../../../assets/navbarLogo.png'


const Navbar = () => {
    const isActive = true;



    return (
        <>
            <div className="navbar bg-black text-[#FF4A1A]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>হোম</NavLink></li>
                            <li><Link to='/ab'>জ্ঞান ও অনুধাবন</Link></li>
                            <li><a>বহুনির্বাচনী</a></li>
                            <li><a>About writer</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">
                        <img src={navbarLogo} className="md:w-12 md:h-12 w-6 h-6 rounded-sm bg-white  fill-white" alt="navbar logo" />
                        abcd ict</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink
                            to="/"
                            style={({ isActive }) => {
                                return isActive ? { color: "white",backgroundColor:'#FF4A1A' } : {};
                            }}
                        > অধ্যায় ভিত্তিক নোটস </NavLink></li>

                        <li><NavLink
                            to="/ab"
                            style={({ isActive }) => {
                                return isActive ? { color: "white",backgroundColor:'#FF4A1A' } : {};
                            }}> জ্ঞান ও অনুধাবন  </NavLink></li>

                        <li><NavLink
                            to="/mcq"
                            style={({ isActive }) => {
                                return isActive ? { color: "white",backgroundColor:'#FF4A1A' } : {};
                            }}> বহুনির্বাচনী </NavLink></li>

                        <li><NavLink
                            to="https://www.youtube.com/@abcdict" target="_blank"
                            style={({ isActive }) => {
                                return isActive ? { color: "blue",backgroundColor:'#FF4A1A' } : {};
                            }}> ভিডিও ক্লাস  </NavLink></li>

                        <li><NavLink
                            to="/aboutWriter"
                            style={({ isActive }) => {
                                return isActive ? { color: "white",backgroundColor:'#FF4A1A' } : {};
                            }}> লেখক সম্পর্কে </NavLink></li>
                        
                        
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/register' className="border border-[#FF4A1A] px-1 rounded-md mr-3"> register</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;