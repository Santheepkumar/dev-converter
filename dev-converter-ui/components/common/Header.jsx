function Header() {
  return (
    <div className=' p-2 border-rounded-md bg-gray-600'>
      <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap'>
          <div>
            <svg
              className=' h-8 w-8 stroke-current text-indigo-50'
              xmlns='http://www.w3.org/2000/svg'
              fill=''
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              />
            </svg>
          </div>
          <div className='w-0 flex-1 text-center  '>
            <p className='ml-3  text-white truncate'>
              <span className='hidden md:inline flex-justify-center  text-lg'>
                Dev Converter
              </span>
            </p>
          </div>
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
