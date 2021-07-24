import React from "react";
import "./style.css";
import Hello from "./Hello";

// Coping function
const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

// Configuration
const FUNCS_AND_LABELS = [
  {
    label: "Capitalize",
    functionName: "toCapitalize",
  },
  {
    label: "Stringify",
    functionName: "stringyfy",
  },
  {
    label: "Lowercase",
    functionName: "toSmallCase",
  },
];

// All Methods
function allStringFunctions() {}

allStringFunctions.prototype.toCapitalize = (str) => {
  return str.toUpperCase();
};

allStringFunctions.prototype.stringyfy = (anything) => {
  return JSON.stringify(anything);
};

allStringFunctions.prototype.toSmallCase = (str) => {
  return str.toLowerCase();
};

const ASF = new allStringFunctions();

// Component
export default function App() {
  const [currentConverter, setCC] = React.useState({});
  const [output, setOutput] = React.useState("");

  React.useEffect(() => {
    setCC(FUNCS_AND_LABELS[0]);
  }, []);

  return (
    <>
      <div id='emberrr' />
      <div>
        <label htmlFor=''>Capitalize</label>
        <select
          onChange={(e) => {
            let index = e.nativeEvent.target.selectedIndex;
            let labelE = e.nativeEvent.target[index].text;
            let value = e.target.value;
            setCC({
              label: labelE,
              functionName: value,
            });
          }}>
          {FUNCS_AND_LABELS.map((obj) => (
            <option value={obj.functionName}> {obj.label}</option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: 30 }}>
        <label htmlFor=''>{currentConverter.name}</label>

        <input
          type='text'
          onChange={(e) => {
            const convertedOutput = ASF[currentConverter.functionName](
              e.target.value
            );
            setOutput(convertedOutput);
          }}
        />
        <button
          onClick={() => {
            copyToClipboard(output);
          }}>
          Copy
        </button>
      </div>
      <div style={{ marginTop: 20 }}>{output}</div>
      <Hello hi={"hi"}>Hello</Hello>
    </>
  );
}
