
import pdfFile from '../../../assets/semester1 ab.pdf';

const Semester1 = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'semester1 ab.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-teal-700 flex flex-col text-center gap-5 text-white text-sm lg:text-lg  font-normal"
    >
      <button
        className="py-2 px-2  lg:py-3 mt-6 text-white mx-auto md:px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
        onClick={handleDownload}
      >
        Download জ্ঞান ও অনুধাবন
      </button>
    </div>
  );
};

export default Semester1;
