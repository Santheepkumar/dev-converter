import React from "react";
import Button from "../components/common/Button";
import "../styles/globals.css";

export default {
  title: "Common/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
