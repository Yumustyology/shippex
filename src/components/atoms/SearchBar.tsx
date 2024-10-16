import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search-outline" size={20} color="#A7A3B3" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onChangeText={setSearchText}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F2F8',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 17
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingLeft: 14,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
  },
});

export default SearchBar;
