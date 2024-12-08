



This transformation involves modifying how a ```paragraph``` block type is handled in a schema-like structure by replacing its static configuration with a runtime validation function ```(isValidNode)```.
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

