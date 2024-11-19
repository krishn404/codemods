// Test Case 1: Simple usage of useContext with EditorContext
const MyComponent1 = () => {
    const editor = useContext(EditorContext);
    // some code
    console.log("Editor initialized");
    editor.updateState();
  };
  
  // Test Case 2: useContext in another component
  const AnotherComponent = () => {
    const editor = useContext(EditorContext);
    const other = useContext(OtherContext);
    // some code
    console.log("Editor context:", editor);
    console.log("Other context:", other);
  };
  
  // Test Case 3: useContext with EditorContext, but not a direct variable
  const MyComponent2 = () => {
    const editor = useContext(EditorContext);
    const isEditorReady = editor.isReady;
    // some code
    console.log("Editor ready status:", isEditorReady);
    editor.save();
  };
  
  // Test Case 4: Usage of other hooks or state
  const MyComponent3 = () => {
    const someState = useState(false);
    const anotherState = useState('hello');
    // some code
    console.log("Some state:", someState);
    console.log("Another state:", anotherState);
  };
  
  // Test Case 5: Already using the new hooks
  const MyComponent4 = () => {
    const editor = useSlate();
    const selected = useSelected();
    const focused = useFocused();
    // some code
    console.log("Editor state:", editor);
    console.log("Is selected:", selected);
    console.log("Is focused:", focused);
  };
  