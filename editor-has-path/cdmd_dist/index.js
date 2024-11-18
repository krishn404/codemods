"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Pattern to match "if (Editor.hasPath)"
const editorHasPathPattern = `
  if (Editor.hasPath) {
    $$$BODY
  }
`;

// Replacement pattern to update to "if (Editor.hasPath(editor, path))"
const editorHasPathNewPattern = `
  if (Editor.hasPath(editor, path)) {
    $$$BODY
  }
`;

// Simple standalone pattern "Editor.hasPath"
const simpleEditorHasPath = `Editor.hasPath`;

// Replacement for standalone "Editor.hasPath(editor, path)"
const simpleEditorHasPathNew = `Editor.hasPath(editor, path)`;

// Main transformation function
function transform({ files }) {
  // Transform "if (Editor.hasPath)" cases
  files("**/*.ts")
    .jsFam()
    .astGrep(editorHasPathPattern)
    .replace(editorHasPathNewPattern);

  // Transform standalone "Editor.hasPath" usage
  files("**/*.ts")
    .jsFam()
    .astGrep(simpleEditorHasPath)
    .replace(simpleEditorHasPathNew);

  console.log('Transformed Editor.hasPath occurrences to include editor and path parameters');
}

// Export the transformation as default
exports.default = transform;
