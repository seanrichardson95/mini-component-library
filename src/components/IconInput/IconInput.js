import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    iconSize: `${18/16}rem`,
    fontSize: `${18/16}rem`,
    underlineThickness: "2px",
  },
  small: {
    iconSize: `${14/16}rem`,
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
      <Input style={{ '--width': width + 'px'}} styles={STYLES[size]} type="text" placeholder={placeholder} label={label}/>
      <StyledIcon id={icon} size={STYLES[size].iconSize}></StyledIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  background-color: none;
  border: 0;
  position: absolute;
  padding: 0.25em 0 0.25em 1.75em;
  width: var(--width);
  font-size: ${({ styles }) => styles.fontSize};
  font-family: 'Roboto', sans-serif;
  border-bottom: ${({ styles }) => `${styles.underlineThickness}`} solid ${COLORS.black};
  color: ${COLORS.gray700};
  font-weight: 700;
  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0.25em;
  bottom: 0.25em;
  left: 0.1em;
  pointer-events: none;
`

export default IconInput;
