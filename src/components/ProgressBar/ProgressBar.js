/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
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

const ProgressBar = ({ value, size }) => (
  <BarBackground sizeProps={SIZES[size]} aria-valuenow={value} role="progressbar" aria-label="progress bar">
    <BarFill percent={value}></BarFill>
  </BarBackground>
);

const BarBackground = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${({sizeProps}) => sizeProps.borderRadius};
  height: ${({sizeProps}) => sizeProps.height};
  padding: ${({sizeProps}) => sizeProps.padding};
`

const BarFill = styled.div`
  background-color: ${COLORS.primary};
  width: ${({ percent }) => percent <= 100 ? `${percent}%` : "100%"};
  height: 100%;
  max-height: 16px;
  border-radius: ${({ percent }) => percent < 99 ? "4px 0px 0px 4px" : "4px"};
`

export default ProgressBar;
