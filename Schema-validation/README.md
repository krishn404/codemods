


## Slate v0.104 Schema Validation transformtaion
This codemod updated the Schema Validation for Slate v0.88 to v0.104

### Before

```ts
const schema = {
  blocks: {
    paragraph: {
      isVoid: false,
    },
  },
};
```

### After

```ts
const isValidNode = (node: Node) => {
  if (Element.isElement(node) && node.type === 'paragraph') {
    return node.children.every(child => Text.isText(child));
  }
  return true;
};
```

