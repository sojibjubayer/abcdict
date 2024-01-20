import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";


const Main = () => {
    return (
        <div className="lg:w-[98%] mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;