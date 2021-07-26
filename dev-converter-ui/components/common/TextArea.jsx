function TextArea({ converterLabel, onChange }) {
  return (
    <div>
      <div className='text-xl mb-4 text-gray-200'>
        <label>{converterLabel}</label>
      </div>
      <textarea
        className='p-2 border border-gray-400 rounded-md bg-gray-800 focus:outline-none text-white focus:border-brand-500'
        rows='8'
        cols='50'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextArea;
