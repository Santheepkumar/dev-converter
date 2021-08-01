import copyToClipboard from "../../utils/copyToClipboard";
import Button from "./Button";

function Preview(props) {
  const content =
    typeof props.content === "string" || typeof props.content === "number"
      ? props.content
      : JSON.stringify(props.content, null, 2);
  return (
    <div className="max-w-xl">
      <h1 className="text-gray-200 text-xl py-2">Preview</h1>
      <pre
        className=" relative border border-gray-400 rounded-md bg-gray-800 text-white 
         hover:focus:outline-none focus:ring focus:ring-brand-100 focus-within p-4 overflow-hidden"
      >
        <Button
          className="absolute -right-2 top-2 mr-4"
          onClick={() => copyToClipboard(content)}
          buttonType="copy"
        />
        {content}
      </pre>
    </div>
  );
}
export default Preview;
