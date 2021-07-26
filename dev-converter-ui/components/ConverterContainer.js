import { useState } from "react";
import Converter from "./Converter";
import { data, functions } from "../functions/stringo";
import useConverter from "../hooks/useConverter";

function ConverterContainer() {
  const [currConverter, setCC, converterFunction, converters] = useConverter(
    functions,
    data
  );

  const goProps = {
    currConverter,
    setCC,
    converterFunction,
    converters,
  };

  return <Converter {...goProps} />;
}

export default ConverterContainer;
