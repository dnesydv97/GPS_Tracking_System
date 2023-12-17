import React, {FC} from 'react';
import styled from 'styled-components';
import {TextProps} from '../types';
import {Text} from 'react-native';
interface TypographyProps extends TextProps {
  title: any;
  style?: any;
}

const StyleText = styled(Text)`
  color: ${({theme, color}: any) =>
    theme.colors[color] || theme.colors.primaryTextColor};
  font-weight: ${({fontWeight}: any) => fontWeight || 400};
  font-size: ${({size, theme}: any) => theme.fontSizes[size] || 18}px;
  text-align: ${({textAlign}: any) => textAlign || `left`};
  flex-shrink: 1;
`;

const Typography: FC<TypographyProps> = ({title, ...restProps}) => {
  return <StyleText {...restProps}>{title}</StyleText>;
};

export default Typography;
