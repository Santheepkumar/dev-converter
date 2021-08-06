import React from "react";
import Login from "../components/common/Login";
import "../styles/globals.css";

export default {
  title: "Common/Login",
  component: Login
};

const Template = args => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
