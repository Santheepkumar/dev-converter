import React from "react";
import Pdfpage from "../components/common/Pdfpage";
import "../styles/globals.css";

export default {
  title: "Common/Pdfpage",
  component: Pdfpage,
};

const Template = (args) => <Pdfpage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
