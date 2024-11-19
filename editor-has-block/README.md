


## Transform ```Editor.hasBlock``` to ```Editor.nodes```
This codemod replaces occurrences of Editor.hasBlock with the equivalent Editor.nodes structure. The transformation updates the code to use a more modern API, ensuring compatibility and improved functionality.

### // Before (v0.88) - ```Editor.hasBlock``` usage

```ts
if (Editor.hasBlock(editor, 'paragraph')) {
  // do something

}
```

### After (v0.104) - Alternative approach using ```Editor.nodes```

```ts
if (Editor.nodes(editor, {
  match: n => Element.isElement(n) && n.type === 'paragraph'
}).next().done === false) {
  // do something
}
```

