import React from "react";
import ConverterOptions from "../components/converter/ConverterOptions";
import "../styles/globals.css";

export default {
  title: "Common/ConverterOptions",
  component: ConverterOptions,
};

const Template = (args) => <ConverterOptions {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  converters: require("./props/stringo.json"),
  currConverter: {
    label: "Capitalize",
    functionName: "toCapitalize",
    fieldType: "input"
  }
}
