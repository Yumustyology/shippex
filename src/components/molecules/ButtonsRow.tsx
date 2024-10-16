import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonsRow: React.FC<{
  onFilterPress: () => void;
  onAddScanPress: () => void;
}> = ({ onFilterPress, onAddScanPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.row, { backgroundColor: "#F4F2F8" }]}
        onPress={onFilterPress}
      >
        <Octicons name="filter" size={22} color="#58536E" />
        <Text style={[styles.buttonText, { color: "#58536E" }]}>Filter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.row, { backgroundColor: "#2F50C1" }]}
        onPress={onAddScanPress}
      >
        <MaterialCommunityIcons name="line-scan" size={20} color="white" />
        <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>Add Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "center", gap: 8 },
  button: {
    width: "48%",
    alignItems: "center",
    borderRadius: 11,
    padding: 10,
    gap:8
  },
  buttonText: { color: "#fff", fontSize: 16 },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
    gap:14
  },
});

export default ButtonsRow;
