import type { Api } from "@codemod/com/workflow";

// Patterns for transformation
const hasBlockPattern = `
  if (Editor.hasBlock(editor, 'paragraph')) {
    $BODY
  }
`;

const hasBlockWithConditionPattern = `
  if (Editor.hasBlock(editor, 'paragraph') && $CONDITION) {
    $BODY
  }
`;

const transformedPattern = `
  if (Editor.nodes(editor, {
    match: n => Element.isElement(n) && n.type === 'paragraph'
  }).next().done === false) {
    $BODY
  }
`;

export async function workflow({ files }: Api) {
  // Transform simple `if (Editor.hasBlock(editor, 'paragraph'))` pattern
  await files("**/*.ts")
    .jsFam()
    .astGrep(hasBlockPattern)
    .replace(transformedPattern);

  // Transform `if (Editor.hasBlock(editor, 'paragraph') && ...)` pattern
  await files("**/*.ts")
    .jsFam()
    .astGrep(hasBlockWithConditionPattern)
    .replace(transformedPattern);

  console.log("Transformed Editor.hasBlock to Editor.nodes.");
}
