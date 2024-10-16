import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../../../assets/avatar-profile.png')} style={{height:38,width:38}} />
      </TouchableOpacity>
      <Image source={require('../../../assets/logo-text-blue.png')} style={styles.logo} />
      <TouchableOpacity style={styles.notification}>
        <Ionicons name="notifications-outline" size={25} color="#2F50C1" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:10, marginBottom: 20 },
  logo: { width: 120, height: 20, resizeMode: 'contain' },
  notification:{
      backgroundColor:'#F4F2F8',
      height: 40,
      width: 40,
      alignItems:'center',
      borderRadius: 1000,
      justifyContent: 'center'
  }
});

export default Header;
