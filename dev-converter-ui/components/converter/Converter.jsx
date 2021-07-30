import ConverterOptions from "./ConverterOptions";
import Convertion from "./Convertion"

function Converter({ currConverter, setCC, converterFunction, converters }) {
  return (
    <div className='h-screen mt-8'>
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
