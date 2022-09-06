import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`


const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  `

  const PresentationalBit = styled.div`
    height: 43px;
    border: 0;
    border-radius: 8px;
    padding: 12px 52px 12px 16px;
    background-color: ${COLORS.transparentGray15};
    outline: 0;
    color: ${COLORS.gray700};
    font-size: ${16/16}rem;
  
    ${NativeSelect}:focus + & {
      outline: -webkit-focus-ring-color auto 5px;
    }
  
    ${NativeSelect}:hover + & {
      color: ${COLORS.black};
    }
  `
const InlineIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  pointer-events: none;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <InlineIcon id={"chevron-down"} strokeWidth="1" size="24"></InlineIcon>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
