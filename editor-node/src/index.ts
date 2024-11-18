import type { Api } from "@codemod/com/workflow";

// Patterns for the transformation
const editorNodePattern = `
  const [node, path] = Editor.node(editor, $AT);
`;

const editorNodeNewPattern = `
  const [nodeEntry] = Editor.nodes(editor, {
    at,
    match: n => true,
  });
  const [node, path] = nodeEntry;
`;

// Simple patterns for direct replacements (without destructuring)
const simpleEditorNode = `Editor.node(editor, $AT)`;
const simpleEditorNodeNew = `Editor.nodes(editor, {
  at,
  match: n => true,
})`;

export async function workflow({ files }: Api) {
  // Transform multi-line occurrences
  await files("**/*.ts")
    .jsFam()
    .astGrep(editorNodePattern)
    .replace(editorNodeNewPattern);

  // Transform single-line occurrences
  await files("**/*.ts")
    .jsFam()
    .astGrep(simpleEditorNode)
    .replace(simpleEditorNodeNew);

  console.log("Transformed Editor.node to Editor.nodes format.");
}
