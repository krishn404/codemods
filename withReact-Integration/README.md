# Codemod Slate: `withReact(createEditor())` to `useMemo` Transformation

This codemod transforms the usage of `withReact(createEditor())` into a `useMemo`-based structure, which wraps the editor creation and introduces an inline-checking function (`isInline`) for the editor instance. This transformation optimizes the creation of the editor object by memoizing it.

## Example


**Before (v0.88):**

```typescript
const editor = withReact(createEditor());
```


**After (v0.104):**

```typescript
const editor = useMemo(() => {
  const e = withReact(createEditor());
  e.isInline = element => {
    return element.type === 'inline-element' ? true : false;
  };
  return e;
}, []);
```