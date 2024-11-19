// Import necessary packages
const fs = require('fs');
const path = require('path');
const { Api } = require('@codemod.com/workflow');

// Define the workflow transformation logic
async function workflow({ files }) {
  // Define patterns for search and replacement
  const insertNodesPattern = `Transforms.insertNodes($EDITOR, $NEWNODE)`;
  const insertNodesNewPattern = `
    Transforms.insertNodes($EDITOR, $NEWNODE, {
      at: $EDITOR.selection ?? undefined,
      select: true,
    })
  `;

  // Apply the transformation to all .ts files
  await files("**/*.ts")
    .jsFam()
    .astGrep(insertNodesPattern)
    .replace(insertNodesNewPattern);

  console.log("Transformed Transforms.insertNodes calls with the updated format.");
}

// Run the workflow with the given API
async function runCodemod() {
  const api = {
    files: async (globPattern) => ({
      jsFam: () => ({
        astGrep: (pattern) => ({
          replace: (newPattern) => {
            // In real use, files would be read from the filesystem
            // Here, we're mocking the replacement
            console.log(`Applying pattern: ${pattern}`);
            console.log(`Replacement: ${newPattern}`);
          }
        })
      })
    })
  };

  await workflow(api);
}

// Run the script if executed as a standalone file
if (require.main === module) {
  runCodemod()
    .then(() => console.log('Codemod execution finished.'))
    .catch((err) => console.error('Error during codemod execution:', err));
}

