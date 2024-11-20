// Example 1: Basic usage of selection assignment
function testBasicSelectionAssignment() {
    const selection = editor.selection;  // Should be transformed to selection as Range | null
    const start = Range.start(selection);  // Should be wrapped in if (selection)
}

// Example 2: Standalone selection assignment with Range.start
const selection = editor.selection;  // Should be transformed to selection as Range | null
const start = Range.start(selection);  // Should be wrapped in if (selection)

// Example 3: Nested selection and Range.start calls
function testNestedSelectionCalls() {
    const selection = editor.selection;  // Should be transformed to selection as Range | null
    if (selection) {
        const start = Range.start(selection);  // Should stay wrapped in if (selection)
        console.log(start);
    }
}

// Example 4: Multiple selection usages in a function
function testMultipleSelectionUsages() {
    const selection = editor.selection;  // Should be transformed to selection as Range | null
    const start = Range.start(selection);  // Should be wrapped in if (selection)
    const end = Range.end(selection);  // Should also be wrapped in if (selection)
    console.log(start, end);
}

// Example 5: Complex case with selection and Range.start
function testComplexSelectionStructure() {
    const selection = editor.selection;  // Should be transformed to selection as Range | null
    if (selection) {
        const start = Range.start(selection);  // Should stay wrapped in if (selection)
        const end = Range.end(selection);  // Should also be wrapped in if (selection)
        console.log(start, end);
    }
}

// Example 6: Loop usage of selection
function testLoopSelectionUsage() {
    for (let i = 0; i < 5; i++) {
        const selection = editor.selection;  // Should be transformed to selection as Range | null
        if (selection) {
            const start = Range.start(selection);  // Should be wrapped in if (selection)
            console.log(start);
        }
    }
}

// Example 7: Asynchronous handling of selection
async function testAsyncSelectionUsage() {
    const selection = editor.selection;  // Should be transformed to selection as Range | null
    if (selection) {
        const start = Range.start(selection);  // Should stay wrapped in if (selection)
        console.log(start);
    }
}

// Example 8: Direct property usage of selection with Range.start
const selection = editor.selection;  // Should be transformed to selection as Range | null
const start = Range.start(selection);  // Should be wrapped in if (selection)
