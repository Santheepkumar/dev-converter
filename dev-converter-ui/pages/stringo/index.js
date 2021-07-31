import ConverterContainer from "../../components/converter/ConverterContainer";
import { data, functions } from "./main";

function index() {
  return <ConverterContainer data={data} functions={functions} />;
}

export default index;
