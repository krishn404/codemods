


## Editor.node transformation
This codemod transforms Editor.node (v0.88) usage into Editor.nodes (v0.104) format. It also handles cases with both destructuring and non-destructuring.

### Before (v0.88) - Editor.node usage

```ts
const [node, path] = Editor.node(editor, at);
```

### After (v0.104) - Editor.nodes usage

```ts
const [nodeEntry] = Editor.nodes(editor, {
  at,
  match: n => true,
});
const [node, path] = nodeEntry;
```

