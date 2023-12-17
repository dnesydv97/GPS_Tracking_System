import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../utils';
import {
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  style?: any;
  background?: keyof typeof Theme.colors;
  borderRadius?: number;
  height?: number;
  width?: number;
}

const StyleButton = styled.TouchableOpacity<any>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) =>
    props.theme.colors[props.background || 'primary']};
  border-radius: ${(props: any) => props.borderRadius || 4}px;
  align-items: center;
  height: ${(props: any) => props.height || 40}px;
  width: ${(props: any) => props.width || 60}px;
`;

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading,
  style,
  ...props
}) => {
  return (
    <StyleButton
      onPress={onPress}
      style={{...style, ...styles.button}}
      {...props}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </StyleButton>
  );
};

const styles = StyleSheet.create({
  button: {},
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CustomButton;
