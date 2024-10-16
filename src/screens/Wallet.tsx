import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaContainer from '../components/molecules/SafeAreaContainer';

const Wallet: React.FC = () => {
  return (
    <SafeAreaContainer style={styles.container}>
      <Text style={styles.title}>Wallet</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Your Balance</Text>
        <Text style={styles.balanceAmount}>$1,200.00</Text>
      </View>
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Recent Transactions</Text>
        <Text style={styles.transactionText}>No transactions available.</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  balanceContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 16,
    color: '#555',
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  transactionContainer: {
    paddingTop: 20,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 16,
    color: '#888',
  },
});

export default Wallet;
