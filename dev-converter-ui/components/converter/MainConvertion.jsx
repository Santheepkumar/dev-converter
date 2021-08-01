import React, { useEffect, useState } from "react";
import Preview from "../common/Preview";
import Input from "../common/Input";
import TextArea from "../common/TextArea";

function MainConvertion({ converterFunction, currConverter }) {
  const [previewContent, setPC] = useState(" ");

  const onChange = (userInput) => {
    setPC(converterFunction(userInput));
  };

  // useEffect(() => {
  //   if (!previewContent) {
  //     setPC("Let go convert it");
  //   }
  // }, [previewContent]);

  return (
    <div className="max-w-7xl mx-auto mt-10 border border-gray-400 p-8 rounded-xl">
      <div className="flex justify-between flex-wrap">
        <div className="w-full lg:w-1/2">
          {currConverter.fieldType === "input" ? (
            <Input converterLabel={currConverter.label} onChange={onChange} />
          ) : (
            <TextArea converterLabel={currConverter.label} onChange={onChange} />
          )}
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <Preview content={previewContent} />
        </div>
      </div>
    </div>
  )
}

export default MainConvertion;
