import React from "react";
import PdfConverter from "../components/common/PdfConverter";
import "../styles/globals.css";

export default {
  title: "Common/PdfConverter",
  component: PdfConverter
};

const Template = args => <PdfConverter {...args} />;

export const Default = Template.bind({});
Default.args = {};
