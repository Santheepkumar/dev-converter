import React from "react";
import Textarea from "../components/common/Textarea";
import "../styles/globals.css";

export default {
  title: "Common/Textarea",
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
