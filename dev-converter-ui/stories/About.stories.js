import React from "react";
import About from "../components/common/About";
import "../styles/globals.css";

export default {
  title: "Common/About",
  component: About
};

const Template = args => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};
