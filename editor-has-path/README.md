# ```Editor.hasPath``` Migration Guide


This guide covers the migration of `Editor.hasPath` usage from Slate.js v0.88 to v0.104. The API has changed from a property-based check to a function call pattern, requiring updates to existing code.

## Code Changes

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

## Key Changes
- Changed from property access (`Editor.hasPath`) to function call (`Editor.hasPath(editor, path)`)
- Now requires two parameters: editor instance and path to check
- Provides more explicit path validation
- Improved type safety with TypeScript

## Migration Steps
1. Identify all instances of `Editor.hasPath` property access
2. Replace with `Editor.hasPath(editor, path)` function calls
3. Ensure editor instance is available in scope
4. Update path parameters to match your document structure

## Benefits
- More explicit API design
- Better type safety and error checking
- Consistent with other Slate.js v0.104 APIs
- Improved code readability and maintenance
