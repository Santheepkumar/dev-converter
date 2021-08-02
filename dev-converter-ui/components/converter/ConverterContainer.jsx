import { useState } from "react";
import Converter from "./Converter";
import useConverter from "../../lib/hooks/useConverter";

function ConverterContainer({ data, functions }) {
  const [currConverter, setCC, converterFunction, converters] = useConverter(
    functions,
    data
  );

  const goProps = {
    currConverter,
    setCC,
    converterFunction,
    converters
  };

  return <Converter {...goProps} />;
}

export default ConverterContainer;
