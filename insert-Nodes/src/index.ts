import type { Api } from "@codemod.com/workflow";

export async function workflow({ files }: Api) {
  // Define patterns
  const insertNodesPattern = `Transforms.insertNodes($EDITOR, $NEWNODE)`;
  const insertNodesNewPattern = `
    Transforms.insertNodes($EDITOR, $NEWNODE, {
      at: $EDITOR.selection ?? undefined,
      select: true,
    })
  `;

  // Apply the transformation
  await files("**/*.ts")
    .jsFam()
    .astGrep(insertNodesPattern)
    .replace(insertNodesNewPattern);

  console.log("Transformed Transforms.insertNodes calls with the updated format.");
}
