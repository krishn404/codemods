

This codemod automates the update of your `onChange` event handler function to support the new `Descendant[]` type and selection handling introduced in version 0.104.

**Before (v0.88):**

```typescript
const onChange = value => {
  setValue(value);
};
```
**After (v0.104)**

```typescript
const onChange = (newValue: Descendant[]) => {
  setValue(newValue);
  // Additional state management if needed
  const selection = editor.selection;
  if (selection) {
    // Handle selection changes
  }
};
```
