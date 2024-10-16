import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ShipmentCard from "../atoms/ShippmentCard";
import { Shipment } from "../../lib/types/Shippment.types";

interface ShipmentListProps {
  shipments: Shipment[];
  searchText: string;
  toggleSelectAll: () => void;
  isSelectAll: boolean;
  toggleSelect: (id: string) => void;
  toggleExpand: (id: string) => void;
}

const ShipmentList: React.FC<ShipmentListProps> = ({
  shipments,
  searchText,
  toggleSelectAll,
  isSelectAll,
  toggleSelect,
  toggleExpand,
}) => {
  const [refreshing, setRefreshing] = useState(false); 

  const filteredShipments = shipments.filter(
    (shipment) =>
      shipment.status.toLowerCase().includes(searchText.toLowerCase()) || 
      shipment.awb.includes(searchText) ||
      shipment.destination.city.toLowerCase().includes(searchText.toLowerCase()) ||
      shipment.destination.address.toLowerCase().includes(searchText.toLowerCase()) ||
      shipment.origin.address.toLowerCase().includes(searchText.toLowerCase()) ||
      shipment.origin.city.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View>
      <View style={styles.shipmentsHeader}>
        <Text style={styles.shipmentsTitle}>Shipments</Text>
        <TouchableOpacity
          style={styles.selectAllContainer}
          onPress={toggleSelectAll}
        >
          <View style={[styles.checkbox, { borderColor: isSelectAll ? "#007aff" : "#D0D5DD" }]}>
            {isSelectAll && <View style={styles.checkedInner} />}
          </View>
          <Text style={{ color: "#007aff", marginLeft: 8 }}>
            {isSelectAll ? "Deselect All" : "Mark All"}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredShipments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShipmentCard
            shipment={item}
            toggleSelect={toggleSelect}
            toggleExpand={toggleExpand}
          />
        )}
        contentContainerStyle={{ paddingBottom: 390 }}  
        refreshing={refreshing} 
        onRefresh={handleRefresh} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shipmentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 5
  },
  selectAllContainer: { flexDirection: "row", alignItems: "center" },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedInner: {
    width: 14,
    height: 14,
    backgroundColor: "#007aff",
  },
  shipmentsTitle: { fontSize: 18, fontWeight: "bold" },
});

export default ShipmentList;
