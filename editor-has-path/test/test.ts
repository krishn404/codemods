// Example 1: Basic if statement with Editor.hasPath
function testBasicIf() {
    if (Editor.hasPath) {
        console.log("This should be transformed");
    }
}

// Example 2: Standalone property usage
const hasPathProperty = Editor.hasPath;

// Example 3: Nested if statement
function testNestedIf() {
    const someCondition = true;
    if (someCondition) {
        if (Editor.hasPath) {
            console.log("This nested if should be transformed");
        }
    }
}

// Example 4: Multiple usage in one function
function testMultiple() {
    if (Editor.hasPath) {
        console.log("First usage");
    }
    const anotherPath = Editor.hasPath;
}