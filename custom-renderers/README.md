
## Updating ```renderElement```

This codemod updates the ```renderElement``` function to include TypeScript typings and adds a default case for rendering unsupported element types.

### Before (v0.88)

```ts
const renderElement = props => {
  const { element, children, attributes } = props;
  switch (element.type) {
    case 'paragraph':
      return <p {...attributes}>{children}</p>;
  }
};
```

### After (v0.104)

```ts
import { RenderElementProps } from 'slate-react';

const renderElement = ({ element, children, attributes }: RenderElementProps) => {
  switch (element.type) {
    case 'paragraph':
      return <p {...attributes}>{children}</p>;
    default:
      return <div {...attributes}>{children}</div>;
  }
};
```

