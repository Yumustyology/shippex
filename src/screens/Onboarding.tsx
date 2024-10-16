
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface OnboardingProps {
  openBottomSheet: () => void; 
}

const Onboarding: React.FC<OnboardingProps> = ({ openBottomSheet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-white.png')}
          style={styles.logo}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F50C1',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingBottom: '10%',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: undefined,
    aspectRatio: 2.07,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignSelf: 'center',
    width: '90%',
  },
  buttonText: {
    fontSize: 17,
    color: '#2F50C1',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Onboarding;