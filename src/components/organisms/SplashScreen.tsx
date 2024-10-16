import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
   
    Animated.timing(scaleValue, {
      toValue: 1, 
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      (navigation as any).navigate('Onboarding');
    });
  }, [scaleValue, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../assets/logo.png')} 
        style={[  
          styles.logo,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F50C1',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
