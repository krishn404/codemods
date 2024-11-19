const { files } = require('@codemod/com/workflow');

// Pattern to match the old onChange function (with `value`)
const onChangePattern = `
  const onChange = value => {
    setValue(value);
  };
`;

// New pattern for onChange with `newValue: Descendant[]` and selection handling
const onChangeNewPattern = `
  const onChange = (newValue: Descendant[]) => {
    setValue(newValue);
    // Additional state management if needed
    const selection = editor.selection;
    if (selection) {
      // Handle selection changes
    }
  };
`;

async function workflow() {
  // Transform occurrences of the old onChange pattern to the new one
  await files("**/*.ts")
    .jsFam()
    .astGrep(onChangePattern)
    .replace(onChangeNewPattern);

  console.log("Transformed onChange function to include Descendant[] and selection handling.");
}

workflow();
