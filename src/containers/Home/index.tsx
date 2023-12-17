import React from 'react';
import {Typography, CustomButton, Container} from '../../components';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
} from 'react-native';
import {MapComponent} from '../../components';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <Typography
          title="Home Page"
          size="2x"
          fontWeight={500}
          style={{marginTop: 5, marginBottom: 48, alignSelf:'center'}}
          color="red"
        />
      </TouchableOpacity>
      <MapComponent />
      <CustomButton
        height={50}
        width={90}
        style={{marginTop: 10, alignSelf: 'center'}}
        title="Submit"
        onPress={() => navigation.navigate('Location')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
