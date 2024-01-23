import jubayer from '../../assets/jubayer.png'

const Writer = () => {
    return (
        <div>
            <div className="text-center my-4 md:font-bold font-semibold">
                <img src={jubayer} className="md:w-40 md:h-40 w-24 h-24 border border-[#FF4A1A] rounded-full mx-auto" alt="" />
                <h3 className='font-bold mt-3 text-xl'>Jubayer Hossain</h3>
                <p className=''>MSc and BSc Engineering in Computer Science and Engineering(CSE)</p>
                <p><u>Lecturer,ICT</u></p>
                <p>Dr. Mahbubur Rahman Mollah College</p>
                <p>Matuail,Jatrabari,Dhaka.</p> <br />

                <p>Ex,Lecturer,ICT</p>
                <p>Milestone College</p>
                <p>Uttara,Dhaka.</p> <br />

                <p>Ex,Lecturer,ICT</p>
                <p>Giasuddin Islamic Model College</p>
                <p>Shiddhirganj ,Narayanganj.</p> <br />
            </div>

        </div>
    );
};

export default Writer;