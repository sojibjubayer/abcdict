import { Link } from "react-router-dom";
import navbarLogo from '../../../assets/navbarLogo.png'



const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-black text-neutral-content">
                <aside>
                    <div className="flex gap-3">
                        <img src={navbarLogo} className="w-12 h-12 rounded-sm bg-white  fill-white" alt="navbar logo" />
                        <p>abcd ict<br />HSC ICT online platform</p>
                    </div>
                </aside>
                <nav className="flex justify-center items-center">
                    <Link to='https://www.youtube.com/@abcdict' >
                        <h4>Connect with Youtube</h4>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current mx-auto text-[#FF4A1A] "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>

                </nav>
                <p className="inline">Developed by  <Link to='/aboutWriter'><span className="text-[#FF4A1A] italic"> Jubayer Hossain</span></Link></p>
            </footer>
        </>
    );
};

export default Footer;