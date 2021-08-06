import ConverterContainer from "../../components/converter/ConverterContainer";
import { data, functions } from "../../functions/excelran";

function index() {
  return <ConverterContainer data={data} functions={functions} />;
}

export default index;
