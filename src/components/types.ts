import {Theme} from '../utils';
export interface SpacingProps {
  paddingHorizontal?: keyof typeof Theme.spacing;
  paddingTop?: keyof typeof Theme.spacing;
  paddingBottom?: keyof typeof Theme.spacing;
  marginHorizontal?: keyof typeof Theme.spacing;
  marginTop?: keyof typeof Theme.spacing;
  marginBottom?: keyof typeof Theme.spacing;
}

export interface AlignProps {
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export interface TextProps {
  size?: keyof typeof Theme.fontSizes;
  color?: keyof typeof Theme.colors;
  fontWeight?: number;
  lineHeight?: number;
  textAlign?: string;
}

export interface BackgroundProps {
  background?: keyof typeof Theme.colors;
}

export interface RadiusProps {
  borderRadius?: keyof typeof Theme.fontSizes;
}
