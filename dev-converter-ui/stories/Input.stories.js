import React from "react";
import Input from "../components/common/Input";
import "../styles/globals.css";

export default {
  title: "Common/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
