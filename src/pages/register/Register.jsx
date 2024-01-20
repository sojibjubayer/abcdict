

const Register = () => {
    return (
        <div className="min-h-96">
            <div className="bg-black md:w-[60%] mx-auto text-[#FF4A1A] my-10 p-10">
                <u>Fill up the form</u>
                <form action="">
                    <div className="my-3">
                        <label ><span >your name</span></label>
                        <input type="text" name="name" placeholder="your name" className="bg-[#FF4A1A] w-full p-2 text-white" required />
                    </div>
                    <div className="mb-7">
                        <label >your college name</label>
                        <input type="text" name="collegeName" placeholder="your college name" className="bg-[#FF4A1A] w-full p-2 text-white" required />
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-ghost text-base border-[#FF4A1A]  text-[#FF4A1A]  hover:bg-[#FF4A1A] hover:text-black ">register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;