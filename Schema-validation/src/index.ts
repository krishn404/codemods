import type { Api } from "@codemod/com/workflow";

// Patterns for the transformation
const schemaPattern = `
  const schema = {
    blocks: {
      paragraph: {
        isVoid: false,
      },
    },
  };
`;

const isValidNodePattern = `
  const isValidNode = (node: Node) => {
    if (Element.isElement(node) && node.type === 'paragraph') {
      return node.children.every(child => Text.isText(child));
    }
    return true;
  };
`;

export async function workflow({ files }: Api) {
  // Transform occurrences of the schema pattern
  await files("**/*.ts")
    .jsFam()
    .astGrep(schemaPattern)
    .replace(isValidNodePattern);

  console.log("Transformed schema definition to isValidNode function.");
}
