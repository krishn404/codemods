const renderElement = props => {
    const { element, children, attributes } = props;
    switch (element.type) {
      case 'paragraph':
        return <p {...attributes}>{children}</p>;
    }
  };  