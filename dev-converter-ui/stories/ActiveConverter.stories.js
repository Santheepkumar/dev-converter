import React from "react";
import ActiveConverter from "../components/common/ActiveConverter";
import "../styles/globals.css";

export default {
  title: "Common/ActiveConverter",
  component: ActiveConverter
};

const Template = args => <ActiveConverter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
