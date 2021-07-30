import React from "react"
import Home from "../components/home/Home"
import "../styles/globals.css"

export default {
  title: "Common/Home",
  component: Home
}

const Template = args => <Home {...args} />

export const Primary = Template.bind({})
Primary.args = {
  collections: require("./props/collections.json")
}
