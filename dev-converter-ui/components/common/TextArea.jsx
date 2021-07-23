function TextArea() {
  return (
    <div>
      <div className='text-md mb-4 text-gray-200'>
        <label>Converter Name</label>
      </div>
      <textarea
        className='p-2 border border-gray-400 rounded-md bg-gray-800 focus:outline-none text-white focus:border-brand-500'
        rows='8'
        cols='50'></textarea>
    </div>
  );
}

export default TextArea;
