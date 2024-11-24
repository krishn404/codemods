// Import necessary modules for the codemod transformation
const { Api } = require("@codemod/com/workflow");

// Define the old renderElement function pattern that needs to be transformed
const renderElementPattern = `
  const renderElement = props => {
    const { element, children, attributes } = props;
    switch (element.type) {
      case 'paragraph':
        return <p {...attributes}>{children}</p>;
    }
  };
`;

// Define the new renderElement function pattern with types and default case
const renderElementNewPattern = `
  import { RenderElementProps } from 'slate-react';

  const renderElement = ({ element, children, attributes }: RenderElementProps) => {
    switch (element.type) {
      case 'paragraph':
        return <p {...attributes}>{children}</p>;
      default:
        return <div {...attributes}>{children}</div>;
    }
  };
`;

// Main workflow function that applies the codemod transformation
async function workflow({ files }) {
  // Apply the transformation to all TypeScript (.ts, .tsx), JavaScript (.js, .jsx) files
  await files("**/*.{ts,tsx,js,jsx}")
    .jsFam()  // Assuming this prepares the files for JS/TS transformation
    .astGrep(renderElementPattern)  // Find old renderElement pattern in the files
    .replace(renderElementNewPattern);  // Replace with the new renderElement function

  console.log("Transformation complete: renderElement function updated.");
}

// Execute the workflow
module.exports = workflow;
