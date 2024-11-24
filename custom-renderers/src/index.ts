import type { Api } from "@codemod/com/workflow";

// Pattern to match the old renderElement function (with missing types and no default case)
const renderElementPattern = `
  const renderElement = props => {
    const { element, children, attributes } = props;
    switch (element.type) {
      case 'paragraph':
        return <p {...attributes}>{children}</p>;
      // Add other cases as needed
    }
  };
`;

// New pattern for renderElement with types and a default case for unhandled elements
const renderElementNewPattern = `
  import { RenderElementProps } from 'slate-react';

  const renderElement = ({ element, children, attributes }: RenderElementProps) => {
    switch (element.type) {
      case 'paragraph':
        return <p {...attributes}>{children}</p>;
      // Add other cases as needed
      default:
        return <div {...attributes}>{children}</div>;
    }
  };
`;

export async function workflow({ files }: Api) {
  // Match .ts, .tsx, .js, and .jsx files
  await files("**/*.{ts,tsx,js,jsx}")
    .jsFam()  // Assumes this prepares the files for transformation
    .astGrep(renderElementPattern)  // Find occurrences of the old renderElement function
    .replace(renderElementNewPattern);  // Replace with the new renderElement function

  console.log("Transformed renderElement function with types and default case.");
}
