## Transform API Updates  for ```insertNodes```

### Before (v0.88)

```ts
Transforms.insertNodes(editor, newNode);
```

### After (v0.104)

```ts
Transforms.insertNodes(editor, newNode, {
  at: editor.selection ?? undefined,
  select: true,
});
```
