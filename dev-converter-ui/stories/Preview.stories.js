import React from "react";
import Preview from "../components/common/Preview";
import "../styles/globals.css";

export default {
  title: "Common/Preview",
  component: Preview,
};

const Template = (args) => <Preview {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
