function Header() {
  return (
    <div className='border-rounded-md bg-gray-700'>
      <div className='mx-auto py-2 px-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap'>
          <img className='block h-12 animate-pulse' src={require("./icon.png")} alt='converterdev' />
          <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
            <a
              href='#'
              className='flex items-center border-gray-400  justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-50 bg-gray-600 border- hover:text-white 
      focus:outline-none focus:ring focus:ring-brand-100'>
              About as
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
