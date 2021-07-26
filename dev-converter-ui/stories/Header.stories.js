import React from "react";
import Header from "../components/common/Header";
import "../styles/globals.css";

export default {
  title: "Common/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
