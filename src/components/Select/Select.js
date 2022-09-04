import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  width: max-content;
  position: relative;
  isolation: isolate;
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
`

// const Text = styled.span`
//   line-height: 43px;
//   vertical-align: middle;
//   color: ${COLORS.gray700};
//   font-family: 'Roboto';
// `

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0;
  &:focus + ${PresentationalBit} {
    outline: -webkit-focus-ring-color auto 5px;
  }
`

const InlineIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  z-index: 1;
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
