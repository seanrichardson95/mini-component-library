import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    iconSize: `24px`,
    fontSize: `${18/16}rem`,
    underlineThickness: "2px",
  },
  small: {
    iconSize: `16px`,
    fontSize: `${14/16}rem`,
    underlineThickness: "1px",
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={{ '--width': width + 'px'}} >
      <VisuallyHidden>Input for {label}</VisuallyHidden>
      <IconWrapper size={STYLES[size].iconSize}>
        <Icon id={icon} size={STYLES[size].iconSize}></Icon>
      </IconWrapper>
      <Input style={{ '--width': width + 'px'}} styles={STYLES[size]} type="text" placeholder={placeholder} label={label}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const Input = styled.input`
  background-color: none;
  border: 0;
  padding: 0.25em 0 0.25em 24px;
  width: var(--width);
  font-size: ${({ styles }) => styles.fontSize};
  font-family: 'Roboto', sans-serif;
  border-bottom: ${({ styles }) => `${styles.underlineThickness}`} solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &:hover {
    color: inherit;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${({ size }) => size};
`

export default IconInput;
