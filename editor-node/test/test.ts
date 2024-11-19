// Example 1: Basic usage of Editor.node with destructuring
function testBasicUsage() {
    const [node, path] = Editor.node(editor, at);
    console.log(node, path);  // This should be transformed to Editor.nodes
}
// Example 2: Standalone Editor.node without destructuring
const nodeAtPath = Editor.node(editor, at);  // Should be transformed to Editor.nodes


// Example 3: Nested Editor.node calls
function testNestedNodeCalls() {
    const someCondition = true;
    if (someCondition) {
        const [node, path] = Editor.node(editor, at); // Should be transformed
        console.log(node, path);
    }
}

// Example 4: Multiple usages of Editor.node in one function
function testMultipleUsages() {
    const [node1, path1] = Editor.node(editor, at);  // Should be transformed
    const nodeAtPath2 = Editor.node(editor, at);     // Should also be transformed
    console.log(node1, path1, nodeAtPath2);
}

// Example 5: Complex case involving Editor.node in a function
function testComplexStructure() {
    const [node1, path1] = Editor.node(editor, at);  // Should be transformed
    const anotherResult = Editor.node(editor, at);   // Should also be transformed
    if (node1) {
        console.log("Node1 exists", node1, path1);
    }
    console.log("Another result", anotherResult);
}

// Example 6: Loop usage of Editor.node
function testLoopUsage() {
    for (let i = 0; i < 5; i++) {
        const [node, path] = Editor.node(editor, at); // Should be transformed
        console.log(node, path);
    }
}
// Example 7: Destructured node values inside an async function
async function testAsyncUsage() {
    const [node, path] = await Editor.node(editor, at); // Should be transformed
    console.log(node, path);
}

// Example 8: Direct property usage of Editor.node
const node = Editor.node(editor, at);  // Should be transformed to Editor.nodes
