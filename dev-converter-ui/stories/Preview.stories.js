import React from "react";
import Preview from "../components/common/Preview";
import "../styles/globals.css";

export default {
  title: "Common/Preview",
  component: Preview,
};

const content1 = {
  menu: {
    id: "file",
    value: "File",
    popup: {
      menuitem: [
        { value: "New", onclick: "CreateNewDoc()" },
        { value: "Open", onclick: "OpenDoc()" },
        { value: "Close", onclick: "CloseDoc()" },
      ],
    },
  },
};

const content2 = {
  glossary: {
    title: "example glossary",
    GlossDiv: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossTerm: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para:
              "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML"],
          },
          GlossSee: "markup",
        },
      },
    },
  },
};

const Template = (args) => <Preview {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  content: content1,
};

export const Big = Template.bind({});
Big.args = {
  content: content2,    
};

export const Small = Template.bind({});
Small.args = {
  content: "Santheep kumar",
};
export const None = Template.bind({});
None.args = {
  content: " ",
};
