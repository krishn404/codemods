


## Codemod for transforming Cursor and Selection Handling for Slate v0.88 to v0.104
This codemod turns v0.88 handling of selection into v0.104 handling. It also adds a safety check for the selection being null.


### Before (v0.88)

```ts
const selection = editor.selection;
const start = Range.start(selection);
```

### After (v0.104)

```ts
const selection = editor.selection as Range | null;
if (selection) {
  const start = Range.start(selection);
  // Handle selection safely
}
```

