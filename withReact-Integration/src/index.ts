import type { Api } from "@codemod/core"; // Make sure you have the correct import for the API

// The pattern for the old editor creation logic
const editorCreationPattern = `const $EDITOR = withReact(createEditor());`;

// The new transformation pattern using useMemo
const editorCreationNewPattern = `const $EDITOR = useMemo(() => {
  const e = withReact(createEditor());
  e.isInline = element => {
    return element.type === 'inline-element' ? true : false;
  };
  return e;
}, []);`;

// The transform function that applies the codemod to the matched files
export default async function transform({ files }: Api) {
  await files("**/*.ts")
    .jsFam()  // Parse JavaScript and TypeScript files
    .astGrep(editorCreationPattern)  // Match the old editor creation pattern
    .replace(editorCreationNewPattern);  // Replace with the new transformation logic

  console.log('Transformed editor creation to useMemo and add isInline method');
}
