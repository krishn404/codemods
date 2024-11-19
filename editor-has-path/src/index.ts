import type { Api } from "@codemod/core";

const editorHasPathPattern = `
  if (Editor.hasPath) {
    $$$BODY
  }
`;

const editorHasPathNewPattern = `
  if (Editor.hasPath(editor, path)) {
    $$$BODY
  }
`;

const simpleEditorHasPath = `Editor.hasPath`;
const simpleEditorHasPathNew = `Editor.hasPath(editor, path)`;

export default async function transform({ files }: Api) {

  await files("**/*.ts")
    .jsFam()
    .astGrep(simpleEditorHasPath)
    .replace(simpleEditorHasPathNew);

  console.log('Transformed Editor.hasPath occurrences to include editor and path parameters');
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
}
