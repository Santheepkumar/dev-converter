import ConverterOptions from "./ConverterOptions";
import MainConvertion from "./MainConvertion";

import { getColorByKey } from "../../utils/color.util";

function Converter({ currConverter, setCC, converterFunction, converters }) {
  return (
    <div className="m-2 sm:m-8 mt-10 sm:mt-10">
      <ConverterOptions
        converters={converters}
        setCC={setCC}
        currConverter={currConverter}
      />

      <div className="text-white w-56 mt-5 flex border border-gray-500 rounded-md">
        <h1
          className="bg-pink-500 py-2 px-4 rounded-md text-3xl"
          style={{
            backgroundColor: getColorByKey(key)
          }}
        >
          {currConverter.label.slice(0, 1)}
        </h1>
        <h1 className="ml-8 mt-3 text-xl">{currConverter.label}</h1>
      </div>

      <MainConvertion
        converterFunction={converterFunction}
        currConverter={currConverter}
      />
    </div>
  );
}

export default Converter;
