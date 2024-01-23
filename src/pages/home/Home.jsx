import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="my-7 ">
            <div className="lg:w-[50%] mx-auto md:text-base text-sm">
                <Link to='/notes/chapter1'>
                    <h3 className=" bg-orange-600 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-১  <br /> <span className="text-xs md:text-base">তথ্য ও যোগাযোগ প্রযুক্তিঃ বিশ্ব ও বাংলাদেশ প্রেক্ষিত</span> </h3>
                </Link>
                <Link to='/notes/chapter2'>
                    <h3 className=" bg-red-500 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-২  <br /> কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং </h3>
                </Link>
                <Link to='/notes/chapter3'>
                    <h3 className=" bg-slate-500 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-৩  <br /> সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস </h3>
                </Link>
                <Link to='/notes/chapter4'>
                    <h3 className=" bg-lime-500 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-৪  <br /> ওয়েব ডিজাইন পরিচিতি এবং HTML </h3>
                </Link>
                <Link to='/notes/chapter5'>
                    <h3 className=" bg-fuchsia-600 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-৫ <br /> প্রোগ্রামিং ভাষা </h3>
                </Link>
                <Link to='/notes/chapter6'>
                    <h3 className=" bg-yellow-600 rounded-t-lg  w-full my-4 p-2 text-center font-bold"> অধ্যায়-৬  <br /> ডেটাবেজ ম্যানেজমেন্ট সিস্টেম </h3>
                </Link>

            </div>
        </div>
    );
};

export default Home;