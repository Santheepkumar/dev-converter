import ProtectedPage from "@lib/protected.page";
import Home from "@components/home/Home";
import collections from "./collections";

function index() {
  return <Home collections={collections} />;
}

export default ProtectedPage(index);
