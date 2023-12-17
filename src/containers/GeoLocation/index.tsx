import React from 'react';
import {CustomButton, Typography} from '../../components';
import {View, TouchableOpacity} from 'react-native';
import { goBack } from '../../utils/navigation';
const Location = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => goBack()}>
        <Typography title="Location Page"/>
      </TouchableOpacity>
      <CustomButton
        height={50}
        width={90}
        style={{marginTop: 10, alignSelf: 'center'}}
        title="Go Back"
        onPress={() => goBack()}
      />
    </View>
  );
};

export default Location;
