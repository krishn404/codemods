


## Transforming ```Editor.node```

This codemod transforms ```Editor.node``` usage into ```Editor.nodes``` format. It also handles cases with both destructuring and non-destructuring .The new API returns an iterator of nodes instead of a single node, requiring changes to existing code patterns.


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

