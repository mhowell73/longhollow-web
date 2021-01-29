import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { Image, Text, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  min-width: 255px;
  height: 145px;
  object-fit: cover;

  ${system}
`;

export const StyledText = styled(Text)`
  border-radius: ${themeGet('radii.image')};
  padding: ${themeGet('space.xs')} ${themeGet('space.s')};
  white-space: nowrap;

  ${system}
`;

const neighbors = ({ neighbors }) => props => {
  switch (neighbors) {
    case 'flat':
      return css`
        transform: translateX(${props => 100 * props.selected + 50}%)
          translateX(${props => 42}px);
      `;
    case '3d':
      return css`
        transform: translateX(
            ${props => {
              if (props.selected === props.index) {
                return 150;
              } else if (props.selected > props.index) {
                return 115;
              } else if (props.selected < props.index) {
                return 185;
              }
            }}%
          )
          translateX(${props => -100 * props.selected}%)
          translateZ(${props => Math.abs(props.index - props.selected) * -50}px);
        opacity: ${props => (props.index === props.selected ? 100 : 50)}%;
      `;
    case 'hidden':
    default:
      return css`
        transform: translate(
          ${props => 100 * (props.index - 2 * props.selected)}%
        );
        flex: 1 0 100%;
      `;
  }
};

export const StyledContainer = styled.div`
  top: 0;
  transition-duration: 600ms;

  ${neighbors}
  ${system}
`;

export const StyledContent = styled.div`
  display: flex;
  position: relative;
  transform-style: preserve-3d;
  perspective: 100px;

  ${system}
`;
