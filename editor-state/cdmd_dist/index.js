const { Api } = require('@codemod/com/workflow');

const editorContextPattern = `
  const $EDITOR_VAR = useContext(EditorContext);
`;

const fixCode = `
  const $EDITOR_VAR = useSlate();
  // Access editor state using new hooks

  const selected = useSelected();

  const focused = useFocused();
`;

async function workflow({ files }) {
  await files("**/*.ts")
    .jsFam()
    .astGrep(editorContextPattern)
    .replace(fixCode);

  console.log("Replaced useContext(EditorContext) with useSlate and added hooks.");
}

module.exports = { workflow };
