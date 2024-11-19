// Case 1: Simple hasBlock pattern
if (Editor.hasBlock(editor, 'paragraph')) {
    console.log("This should be transformed");
  }
  
  // Case 2: hasBlock with additional condition
  if (Editor.hasBlock(editor, 'paragraph') && someOtherCondition) {
    console.log("This should also be transformed");
  }