import React from "react";
import Converter from "../components/Converter";
import "../styles/globals.css";

export default {
  title: "Converter",
  component: Converter,
};

const Template = (args) => <Converter {...args} />;

export const Default = Template.bind({});
Default.args = {};

