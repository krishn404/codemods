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
<<<<<<< HEAD
}
=======
}
>>>>>>> 69002ec4ac5ac1bff6cb08014ee2e20e864821d2
