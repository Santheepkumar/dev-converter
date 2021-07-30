import React from "react";
import HomePage from "../components/common/HomePage";
import "../styles/globals.css";

export default {
  title: "Common/HomePage",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
