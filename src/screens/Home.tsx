import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Profile from './Profile';
import Scan from './Scan';
import Shipment from './Shipment';
import Wallet from './Wallet';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopColor: '#EAE7F2',
          borderTopWidth: 1,
          height: 70,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: 'white',
        }
      }}
    >
      <Tab.Screen
        name="Shipments"
        component={Shipment}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/shipment-active.png') : require('../../assets/shipment-inactive.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/scan-active.png') : require('../../assets/scan-inactive.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/wallet-active.png') : require('../../assets/wallet-inactive.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/profile-active.png') : require('../../assets/profile-inactive.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}