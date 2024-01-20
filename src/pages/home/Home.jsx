import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="">
            <div className="lg:w-[50%] mx-auto">
                <Link to='/chapter-1'>
                    <h3 className=" bg-orange-600  w-full mt-4 p-1 text-center font-bold"> অধ্যায়-১  <br /> তথ্য ও যোগাযোগ প্রযুক্তিঃ বিশ্ব ও বাংলাদেশ প্রেক্ষিত </h3>
                </Link>
                <Link to='/chapter-1'>
                    <h3 className=" bg-red-500 w-full mt-4 text-center font-bold"> অধ্যায়-২  <br /> কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং </h3>
                </Link>
                <Link to='/chapter-1'>
                    <h3 className=" bg-slate-500 w-full mt-4 text-center font-bold"> অধ্যায়-৩  <br /> সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস </h3>
                </Link>
                <Link to='/chapter-1'>
                    <h3 className=" bg-lime-500 w-full mt-4 text-center font-bold"> অধ্যায়-৪  <br /> ওয়েব ডিজাইন পরিচিতি এবং HTML </h3>
                </Link>
                <Link to='/chapter-1'>
                    <h3 className=" bg-yellow-400 w-full mt-4 text-center font-bold"> অধ্যায়-৫ <br /> প্রোগ্রামিং ভাষা </h3>
                </Link>
                <Link to='/chapter-1'>
                    <h3 className=" bg-fuchsia-600 w-full my-4 text-center font-bold"> অধ্যায়-৬  <br /> ডেটাবেজ ম্যানেজমেন্ট সিস্টেম </h3>
                </Link>

            </div>
        </div>
    );
};

export default Home;