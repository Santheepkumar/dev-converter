import Header from "./common/Header";
import Footer from "./common/Footer";
import ConverterOptions from "./common/ConverterOptions";
import Convertion from "./Convertion";

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
