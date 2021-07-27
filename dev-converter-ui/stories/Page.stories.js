import React from "react";
import Page from "../components/common/Page";
import "../styles/globals.css";

export default {
  title: "Common/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
