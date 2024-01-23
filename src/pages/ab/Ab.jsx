import { Link } from "react-router-dom";


const Ab = () => {
    return (
        <div className="">

            <h3 className=" bg-black p-2 rounded-t-md  lg:w-[50%] mx-auto mt-4 text-center font-bold text-sm text-[#FF4A1A]"> জ্ঞান ও অনুধাবনমূলক প্রশ্নোত্তর দেখার জন্য অধ্যায়ের নামের উপক ক্লিক কর।  </h3>
            <Link to='/1st-semester'>
            <h3 className=" bg-black p-2 rounded-t-md  lg:w-[30%] mx-auto mt-4 text-center font-bold text-sm text-[#FF4A1A]"> ১ম সেমিস্টার জ্ঞান ও অনুধাবনমূলক  </h3></Link>

            <div className="my-7 ">
                <div className="lg:w-[50%] mx-auto md:text-base text-sm">
                    <Link to='/ab/chapter1'>
                        <h3 className=" bg-orange-600 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-১  <br /> <span className="text-xs md:text-base">তথ্য ও যোগাযোগ প্রযুক্তিঃ বিশ্ব ও বাংলাদেশ প্রেক্ষিত</span> </h3>
                    </Link>
                    <Link to='/ab/chapter2'>
                        <h3 className=" bg-red-500 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-২  <br /> কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং </h3>
                    </Link>
                    <Link to='/ab/chapter3'>
                        <h3 className=" bg-slate-500 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-৩  <br /> সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস </h3>
                    </Link>
                    <Link to='/ab/chapter4'>
                        <h3 className=" bg-lime-500 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-৪  <br /> ওয়েব ডিজাইন পরিচিতি এবং HTML </h3>
                    </Link>
                    <Link to='/ab/chapter5'>
                        <h3 className=" bg-fuchsia-600 rounded-t-lg  w-full mt-4 p-2 text-center font-bold"> অধ্যায়-৫ <br /> প্রোগ্রামিং ভাষা </h3>
                    </Link>
                    <Link to='/ab/chapter6'>
                        <h3 className=" bg-yellow-600 rounded-t-lg  w-full my-4 p-2 text-center font-bold"> অধ্যায়-৬  <br /> ডেটাবেজ ম্যানেজমেন্ট সিস্টেম </h3>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Ab;