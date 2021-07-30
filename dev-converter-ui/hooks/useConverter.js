import { useState } from "react";

function useConverter(funcs, converters) {
  const initialConverter = converters[0];
  const [converter, setConverter] = useState(initialConverter);

  return [converter, setConverter, funcs[converter.functionName], converters, funcs];
}

export default useConverter;
