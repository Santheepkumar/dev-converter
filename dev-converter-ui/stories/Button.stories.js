import React from "react";
import Button from "../components/common/Button";
import "../styles/globals.css";

export default {
  title: "Common/Button",
  component: Button
};

const Template = args => <Button {...args} />;

export const Copy = Template.bind({});
Copy.args = {
  buttonType: "copy"
};
export const Copied = Template.bind({});
Copied.args = {
  copied: true,
  buttonType: "copy"
};
export const Download = Template.bind({});
Download.args = {
  buttonType: "download"
};
