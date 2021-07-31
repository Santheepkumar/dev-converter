import ConverterOptions from "./ConverterOptions";
import Convertion from "./Convertion"

function Converter({ currConverter, setCC, converterFunction, converters }) {
  return (
    <div className='m-2 sm:m-8 mt-10 sm:mt-10'>
      <ConverterOptions
        converters={converters}
        setCC={setCC}
        currConverter={currConverter}
      />
      <Convertion
        converterFunction={converterFunction}
        currConverter={currConverter}
      />
    </div>
  );
}

export default Converter;
