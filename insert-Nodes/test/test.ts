// Example 1: Basic usage
function testBasicInsertNodes() {
    const editor = { selection: null };
    const newNode = { text: "Basic example" };
    Transforms.insertNodes(editor, newNode); 

// Example 2: Standalone method call
function testStandaloneInsertNodes() {
    const editor = { selection: null };
    const newNode = { text: "Standalone example" };
    const result = Transforms.insertNodes(editor, newNode); 
}

// Example 3: Nested usage
function testNestedInsertNodes() {
    const editor = { selection: null };
    const newNode = { text: "Nested example" };
    if (editor.selection) {
        Transforms.insertNodes(editor, newNode); 
    }
}

// Example 4: Multiple usage in a single function
function testMultipleInsertNodes() {
    const editor = { selection: null };
    const newNode = { text: "First example" };
    Transforms.insertNodes(editor, newNode); 
    const anotherNode = { text: "Second example" };
    Transforms.insertNodes(editor, anotherNode); 
}

// Example 5: Non-editor calls (should not be transformed)
function testNonEditorCall() {
    const nonEditor = { selection: null };
    const unrelatedNode = { text: "Unrelated example" };
    Transforms.insertNodes(nonEditor, unrelatedNode); 
}
