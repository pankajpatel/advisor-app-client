import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  display: inline-block;
  border: 1px solid var(--color-gray);
  min-width: 130px;
  border-radius: 0.25rem;
  border: 1px solid;
  overflow: hidden;
  vertical-align: middle;
  background-color: var(--color-gray-light);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='255px' height='255px' viewBox='0 0 255 255' style='enable-background:new 0 0 255 255;'%3E%3Cpolygon points='0,63.75 127.5,191.25 255,63.75'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 13px;
  background-position: calc(100% - 11px);
  margin: 0 0.5rem;
`;

const SelectEl = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  width: 130%;
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`;

const Select = React.forwardRef((props, ref) => (
  <SelectContainer>
    <SelectEl ref={ref} {...props}>
      {props.children}
    </SelectEl>
  </SelectContainer>
));

export default Select;
