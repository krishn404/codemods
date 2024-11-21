// Test Case 1: Simple editor creation
const editor = withReact(createEditor());
// some operations with the editor
console.log("Editor initialized");
editor.updateState();


// Test Case 2: Editor creation with another variable
const anotherEditor = withReact(createEditor());
const someValue = 42;
// some operations with the other editor
console.log("Another editor initialized:", anotherEditor);


// Test Case 3: Editor creation and immediate property setting
const inlineEditor = withReact(createEditor());
inlineEditor.isInline = element => element.type === 'inline-element';
// some operations with inlineEditor
console.log("Inline editor setup:", inlineEditor);
