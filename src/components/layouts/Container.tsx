import {ReactNode} from 'react';
import {View, ScrollView} from 'react-native';
import styled from 'styled-components';
interface ContainerProps {
  children?: ReactNode;
  noScroll?: boolean;
}

const StyleScrollView = styled(ScrollView)<any>`
  flex: 1;
  padding-vertical: 10px;
  padding-bottom: 10px;
  padding-horizontal: 15px;
`;

const StyleView = styled(View)<any>`
  flex: 1;
  padding-vertical: 10px;
  padding-bottom: 10px;
  padding-horizontal: 15px;
`;
const Container = ({children, noScroll}: ContainerProps) => {
  if (noScroll) {
    return <StyleView>{children}</StyleView>;
  }
  return (
    <StyleScrollView
      showsVerticalScrollIndicator={false}
      scrollable={!noScroll}>
      {children}
    </StyleScrollView>
  );
};

export default Container;
