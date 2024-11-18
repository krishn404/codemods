


## Example
This codemod transforms the usage of `Editor.hasPath` from a property access pattern to a function call, aligning with the API changes in Slate.js `v0.104`.


### Before (v0.88)

```ts
if (Editor.hasPath) {
  
}
```

### After (v0.104)

```ts
if (Editor.hasPath(editor, path)) {
  
}
```

