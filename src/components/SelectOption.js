import React from 'react';
import { components } from 'react-select';

// component improving the react select a bit for large datasets
const SelectOption = ({ innerProps, isFocused, children, ...otherProps }) => {
  const { onMouseMove, onMouseOver, ...otherInnerProps } = innerProps;
  const newProps = { innerProps: { ...otherInnerProps }, ...otherProps };
  return <components.Option {...newProps}>{children}</components.Option>;
};

export default SelectOption;
