
import React, { useState, useEffect } from 'react';
import { View, StyleSheet ,ActivityIndicator,AppState } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import startBackgroundSync from '../../BackgroundSync';
import {  requestLocationPermission, storeLocation, retrieveLocations,addLocationInBackground } from '../../permission';
const MapComponent: React.FC = () => {
  const [region, setRegion] = useState<Region | null>(null);
  console.log('region', region)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        await requestLocationPermission();

        Geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setRegion({
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });

            // Store the user's location
            await storeLocation({ latitude, longitude, timestamp: new Date().toISOString() });
         // Add location to background synchronization
         await addLocationInBackground({ latitude, longitude, timestamp: new Date().toISOString() });
          },
          (error) => {
            console.log('Error fetching location:', error.message);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      } catch (error) {
        console.warn('Error requesting location permission:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    
    const retrieveStoredLocations = async () => {
      const storedLocations = await retrieveLocations();
      console.log('Stored Locations:', storedLocations);
    };

    retrieveStoredLocations();
      // Start background synchronization
      startBackgroundSync();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        region && (
          <MapView
            style={styles.map}
            region={region}
            showsUserLocation={true}
            followsUserLocation={true}
          >
            <Marker coordinate={region} title="Your Location" />
          </MapView>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    backgroundColor:'grey',
   height:500
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
