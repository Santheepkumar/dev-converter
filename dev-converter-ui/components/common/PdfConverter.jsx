function PdfConverter() {
  return (
    <div className="text-center  max-w-xl mx-auto">
      <div>
        <button
          type="button"
          className=" text-dark-300 group bg-gray-800 border px-4 py-1.5
       border-gray-200 rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring focus:ring-brand-100"
        >
          <span>Select Converter</span>

          <svg
            className="animate-bounce text-gray-400 ml-2 h-5 w-5 group-hover:text-dark-300 transition ease-in-out duration-150"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="border rounded-2xl border-gray-400 mt-7">
        <h1 className="mt-5 mr-56 text-lg font-bold text-white">
          <label>Choose your file</label>
        </h1>

        <div className="mt-5 ml-36  focus:border-brand-700 border border-dashed rounded-xl border-gray-400 w-72">
          <input
            className="focus:outline-none focus:border-brand-700 py-16 px-10 text-center  "
            type="file"
          />
        </div>
        <div>
          <button className="px-3 focus:bg-gray-800 py-2 mt-10 focus:outline-none focus:text-brand-700  border-gray-500 hover:bg-gray-600 hover:border-gray-400 focus:ring focus:ring-brand-800 font-bold text-base text-white border rounded-lg">
            Convert IMG
          </button>
        </div>
        <button className="px-3 mb-10 py-2 mt-10 focus:outline-none focus:text-brand-700 focus:bg-gray-800  hover:bg-gray-600 hover:border-gray-400 border-gray-500 focus:ring focus:ring-brand-800 font-bold text-base text-white border rounded-lg ">
          Download IMG
        </button>
      </div>
    </div>
  );
}
export default PdfConverter;
