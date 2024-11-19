// Test 1: Basic onChange function with `value`

  const onChange = (newValue: Descendant[]) => {
    setValue(newValue);
    // Additional state management if needed
    const selection = editor.selection;
    if (selection) {
      // Handle selection changes
    }
  };

  