Theis transformation ensures that calls to ```Transforms.insertNodes``` in the updated API  remain functional and behave identically to their usage in the older API (v0.88) while adhering to the new, more explicit parameterization.

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
