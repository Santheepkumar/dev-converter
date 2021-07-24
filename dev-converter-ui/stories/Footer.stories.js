import React from "react";
import Footer from "../components/common/Footer";
import "../styles/globals.css";

export default {
  title: "Common/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
