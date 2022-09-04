/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    height: "24px",
    padding: "4px",
    borderRadius: "8px",
  },
  medium: {
    height: "12px",
    borderRadius: "4px",
  },
  small: {
    height: "8px",
    borderRadius: "4px",
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = STYLES[size];

  if (!styles) {
    throw new Error(``);
  }

  return (
  <BarBackground styles={styles} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" role="progressbar" aria-label="progress bar">
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper>
      <BarFill percent={value}></BarFill>
    </BarWrapper>
  </BarBackground>
  )
};

const BarBackground = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${({styles}) => styles.borderRadius};
  height: ${({styles}) => styles.height};
  padding: ${({styles}) => styles.padding};
`

const BarWrapper = styled.div`
  overflow: hidden; // Trim off corners when progress bar is near full
  border-radius: 4px 0px 0px 4px;
`

const BarFill = styled.div`
  width: ${({ percent }) => `${percent}%`};
  background-color: ${COLORS.primary};
  height: 100%;
  max-height: 16px;
`

export default ProgressBar;
