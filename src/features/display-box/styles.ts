import styled from 'styled-components';

interface BoxProps {
  width: number
  height: number
}

interface TextProps {}

export const Box = styled.div<BoxProps>`
  background-color: #ccc;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const Text = styled.p<TextProps>`
  color: #000;
`;
