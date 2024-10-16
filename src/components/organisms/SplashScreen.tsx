import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
 
    setTimeout(() => {
      Animated.timing(backgroundColor, {
        toValue: 1, 
        duration: 2000,
        useNativeDriver: false,
      }).start(() => {
        (navigation as any).navigate('Onboarding');
      });
    }, 2000);

    
  }, [scaleValue, backgroundColor, navigation]);

  const backgroundColorInterpolate = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#2F50C1'], 
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: backgroundColorInterpolate }]}>
      <Animated.Image
        source={require('../../../assets/logo.png')} 
        style={[  
          styles.logo,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120,
  },
});

export default SplashScreen;
