import React from "react";

function Page() {
  return (
    <div className=' max-w-700  bg-dark-900 border rounded-2xl border-dark-900 '>
      <div className=' mt-5 text-3xl text-dark-100 text-center'>
        <h1>Dev converter</h1>
      </div>
      <h1 className='ml-14 text-2xl text-indigo-50 mt-5'>
        Collection of methods:
      </h1>
      <div className=' items-center max-w-2xl ml-40'>
        <div className=' ml-14  mt-5 p-3 border rounded-xl hover:bg-dark-800 border-gray-400  '>
          <h1 className=' text-white text-2xl hover:underline'>
            1. String method
          </h1>
          <h2 className='mt-2 mb-2 text-dark-400'>snippet collection</h2>
          <p className='text-dark-200  hover:underline'>
            Select the string method to apply you needed function
          </p>
        </div>

        <div className=' ml-14 mt-7 p-3 border rounded-xl hover:bg-dark-800 border-gray-400 '>
          <h1 className='text-white text-2xl  hover:underline'>
            {" "}
            2. Object method
          </h1>
          <h2 className='text-dark-400 mt-2 mb-2'>snippet collection</h2>
          <p className='text-dark-200  hover:underline'>
            Select the object method to apply you needed function
          </p>
        </div>
        <div className=' ml-14 mt-7 p-3 border rounded-xl hover:bg-dark-800 border-gray-400 '>
          <h1 className='text-white text-2xl  hover:underline'>
            3. Dom method
          </h1>
          <h2 className='text-dark-400 mt-2 mb-2'>snippet collection</h2>
          <p className='text-dark-200  hover:underline'>
            Select the dom method to apply you needed function
          </p>
        </div>
        <div className='ml-14 mb-10 mt-7 p-3 border rounded-xl hover:bg-dark-800 border-gray-400 '>
          <h1 className=' text-white text-2xl  hover:underline'>
            4. Array method
          </h1>
          <h2 className='text-dark-400 mt-2 mb-2'>snippet collection</h2>
          <p className='text-dark-200  hover:underline'>
            Select the array method to apply you needed function
          </p>
        </div>
      </div>
    </div>
  );
}
export default Page;
