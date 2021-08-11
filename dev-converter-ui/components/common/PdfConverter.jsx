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

        <div className="mt-5   focus:border-brand-700  w-72 mx-auto">
          <div>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-dark-300"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative px-1 py-0.5 mt-3 cursor-pointer bg-dark-200 rounded-md font-medium text-dark-700 focus-within:outline-none focus-within:ring-2 border hover: border-gray-200  "
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-3 mt-3 text-gray-500">or drag and drop</p>
                </div>
                <p className="text-xs  text-gray-300 pt-5">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
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
