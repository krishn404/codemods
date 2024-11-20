import type { Api } from "@codemod/core";

// Patterns for transformation
const selectionPattern = `const $VAR = $EDITOR.selection;`;
const startPattern = `const $START = Range.start($VAR);`;

const selectionNewPattern = `const $VAR = $EDITOR.selection as Range | null;`;
const startNewPattern = `
  if ($VAR) {
    const $START = Range.start($VAR);
    // Handle selection safely
  }
`;

export default async function transform({ files }: Api) {
  // Transform `const $VAR = $EDITOR.selection;` to `const $VAR = $EDITOR.selection as Range | null;`
  await files("**/*.ts")
    .jsFam() // Ensure we are working with JavaScript/TypeScript files
    .astGrep(selectionPattern) // Find occurrences of `const $VAR = $EDITOR.selection;`
    .replace(selectionNewPattern); // Replace with `const $VAR = $EDITOR.selection as Range | null;`

  // Transform `const $START = Range.start($VAR);` to wrapped `if ($VAR)` check
  await files("**/*.ts")
    .jsFam() // Ensure we are working with JavaScript/TypeScript files
    .astGrep(startPattern) // Find occurrences of `const $START = Range.start($VAR);`
    .replace(startNewPattern); // Replace with the new pattern wrapped in an `if ($VAR)` check

  console.log("Transformations applied:");
  console.log("- Transformed 'const $VAR = $EDITOR.selection;' to 'const $VAR = $EDITOR.selection as Range | null;'");
  console.log("- Wrapped 'const $START = Range.start($VAR);' in an 'if ($VAR)' check.");
}
