



This codemod migrates from using `useContext(EditorContext)` to the new `useSlate()` hook in Slate. It transforms the editor state management approach and adds new state hooks.
 
### Before

```ts
const MyComponent = () => {
  const editor = useContext(EditorContext);
  // ...
};
```

### After

```ts
const MyComponent = () => {
  const editor = useSlate();
  // Access editor state using new hooks
  const selected = useSelected();
  const focused = useFocused();
  // ...
};
```

