import React from "react";
import TextArea from "../components/common/TextArea";
import "../styles/globals.css"

export default {
  title: "Common/TextArea",
  component: TextArea,
};

const Template = (args) => (
  <div className='bg-gray-800 h-screen'>
    <TextArea {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
