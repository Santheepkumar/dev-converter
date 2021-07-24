function Button() {
  return (
    <div>
      <button
        class=' bg-gray-800 px-3 py-1 border m-10 border-gray-400 rounded-md flex space-x-1 hover:bg-white text-gray-800
     '>
        <svg
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='currentColor'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='mt-1 stroke-current text-gray-400 
'>
          <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
          <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
        </svg>
        <span class='text-white'>Copy</span>
      </button>
    </div>
  );
}

export default Button;
