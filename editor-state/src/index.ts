import type { Api } from "@codemod.com/workflow";

const editorContextPattern = `
  const $EDITOR_VAR = useContext(EditorContext);
`;

const fixCode = `
  const $EDITOR_VAR = useSlate();
  // Access editor state using new hooks

  const selected = useSelected();

  const focused = useFocused();
`;

export async function workflow({ files }: Api) {
  await files("**/*.ts")
    .jsFam()
    .astGrep(editorContextPattern)
    .replace(fixCode);

  console.log("Replaced useContext(EditorContext) with useSlate and added hooks.");
}
