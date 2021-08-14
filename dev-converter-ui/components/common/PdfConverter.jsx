import Image from "next/image" 

function PdfConverter() {
  return (
    <div className="text-center  max-w-6xl mx-auto">
      
        <button
          type="button"
          className=" text-dark-300 group bg-gray-800 border px-4 py-1.5
       border-gray-200 rounded-md inline-flex items-center text-base font-medium hover:text-white mt-2 focus:outline-none focus:ring focus:ring-brand-100"
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
      
      <div className="border rounded-2xl border-gray-400 mt-7">
        <h1 className="mt-5 text-xl  text-white">
          <label>Choose your file</label>
        </h1>

        <div className="mt-5 focus:border-brand-700  w-80  mx-auto">
          
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md">
              <div className="space-y-1 text-center">
               

               <Image
              className="block h-5  "
              src={require("../assets/images/file.png")}
              alt=""
              width="40"
              height="40"
            />
                <div className="text-sm text-gray-600">

                 
                  <label
                    htmlFor="file-upload"
                    className="flex mx-auto  relative px-1 py-0.5 mt-3 cursor-pointer bg-purple-500 rounded-md font-medium text-white focus-within:outline-none focus-within:ring-2"
                  >
                     <svg
                     xmlns="http://www.w3.org/2000/svg" 
                      className="h-7 w-7 mt-1 mb-1  " 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                      <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                     </svg>
                     <span className="ml-2 mt-2 mr-2">Browse file</span>
                     <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                     />
                  </label>
                </div>
                <p className="text-xs  text-gray-300 pt-5">
                  PNG,JPG up to 5MB
                </p>
              </div>
            </div>
          
        </div>
        <div>
          <button className="flex justify-center mx-auto px-3 focus:bg-gray-800 py-2 mt-10 focus:outline-none focus:text-brand-700  border-gray-500 hover:bg-gray-600 hover:border-gray-400 focus:ring focus:ring-brand-800 font-bold text-base text-white border rounded-lg">

                    <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     className="h-7 mt-1 mb-1 w-7 border border-purple-500 outline-none rounded-md bg-purple-500" 
                     viewBox="0 0 20 20" 
                     fill="currentColor">
                    <path 
                     d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                    </svg>

                    <span className="ml-2 mt-1.5">
                       Convert IMG
                    </span>
          </button>
        </div>
        <button className="flex mx-auto px-3 mb-10 py-2 mt-10 focus:outline-none focus:text-brand-700 focus:bg-gray-800  hover:bg-gray-600 hover:border-gray-400 border-gray-500 focus:ring focus:ring-brand-800 font-bold text-base text-white border rounded-lg ">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-7 w-7 mt-1 mb-1  bg-purple-500 border border-purple-500 rounded-md outline-none" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="ml-2 mt-1.5">
                      Download IMG
                    </span>
        </button>
      </div>
     
    </div>
  );
}
export default PdfConverter;
