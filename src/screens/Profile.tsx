import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SafeAreaContainer from '../components/molecules/SafeAreaContainer';

const Profile: React.FC = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={require('../../assets/avatar-profile.png')}
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Ibrahim Shaker</Text>
        <Text style={styles.email}>ibrahim@example.com</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Profile Details</Text>
        <Text style={styles.detailItem}>Phone: +1234567890</Text>
        <Text style={styles.detailItem}>Address: 123 Main St, City, Country</Text>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 15
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  detailItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default Profile;
