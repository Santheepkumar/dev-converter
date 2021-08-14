import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loader(props) {
  return (
    <div className="flex justify-center mt-16">
      <PropagateLoader {...props} />
    </div>
  );
}
