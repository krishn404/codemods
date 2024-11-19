## Transform API Updates for Slate v0.88 to v0.104

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
