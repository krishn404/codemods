// Example 1: Basic schema definition
function testBasicSchema() {
    
  const isValidNode = (node: Node) => {
    if (Element.isElement(node) && node.type === 'paragraph') {
      return node.children.every(child => Text.isText(child));
    }
    return true;
  };


}

// Example 2: Schema with additional properties (should not transform extra properties)
function testExtendedSchema() {
    
  const isValidNode = (node: Node) => {
    if (Element.isElement(node) && node.type === 'paragraph') {
      return node.children.every(child => Text.isText(child));
    }
    return true;
  };



}

// Example 3: Different structure (should not transform)
function testUnrelatedStructure() {
    const unrelated = {
        blocks: {
            section: {
                isVoid: false,
            },
        },
    };

    // Expected: No transformation
}

// Example 4: Schema inside a function
function testSchemaInFunction() {
    function createSchema() {
        
  const isValidNode = (node: Node) => {
    if (Element.isElement(node) && node.type === 'paragraph') {
      return node.children.every(child => Text.isText(child));
    }
    return true;
  };

        return schema;
    }


}

// Example 5: Schema with a variable reference (should not transform)
function testVariableReference() {
    const paragraph = {
        isVoid: false,
    };

    const schema = {
        blocks: {
            paragraph,
        },
    };

    // Expected: No transformation
}
