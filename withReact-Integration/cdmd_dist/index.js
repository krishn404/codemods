// Import the transform function from your codemod transformation logic
const { transform } = require('../src/index'); // Adjusted to point to the transformation logic in src/index.ts
const path = require('path');
const fs = require('fs');
const glob = require('glob');

// Specify the path to the directory or files you want to apply the codemod to
const filesToTransform = path.join(__dirname, '../test/**/*.ts'); // Looking for .ts files inside the 'test' folder

// Utility function to check if the files exist before applying the codemod
function checkFilesExist(pattern) {
  const files = glob.sync(pattern);
  if (files.length === 0) {
    console.log(`No files found matching: ${pattern}`);
    process.exit(1); // Exit with an error code if no files are found
  }
  return files;
}

// The main function to run the codemod
async function runCodemod() {
  try {
    // Check if the files matching the pattern exist
    const files = checkFilesExist(filesToTransform);
    
    // Apply the transformation to the files
    console.log(`Running codemod on files: ${files.join(', ')}`);
    await transform({ files: files });

    console.log('Codemod transformation completed successfully.');
  } catch (error) {
    console.error('Error during transformation:', error);
    process.exit(1); // Exit with an error code if something goes wrong
  }
}

runCodemod();
