function Input() {
  return (
    <div>
      <div className='text-md mb-4 text-gray-200'>
        <label className="text-xl">Converter Name</label>
      </div>
      <input
        className='p-2 border border-gray-400 rounded-md bg-gray-800 focus:outline-none text-white focus:border-brand-500 w-1/4'
        type='text'
      />  
    </div>
  );
}

export default Input;
