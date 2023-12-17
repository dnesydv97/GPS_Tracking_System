
import { PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'This app needs access to your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const storeLocation = async (location: Location) => {
  try {
    const existingLocations = await AsyncStorage.getItem('userLocations');
    const newLocations = existingLocations ? [...JSON.parse(existingLocations), location] : [location];

    await AsyncStorage.setItem('userLocations', JSON.stringify(newLocations));
  } catch (error) {
    console.error('Error storing location:', error);
  }
};

export const retrieveLocations = async (): Promise<Location[]> => {
  try {
    const storedLocations = await AsyncStorage.getItem('userLocations');
    return storedLocations ? JSON.parse(storedLocations) : [];
  } catch (error) {
    console.error('Error retrieving locations:', error);
    return [];
  }
};
