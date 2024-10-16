import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Shipment } from "../../lib/types/Shippment.types";

interface ShipmentCardProps {
  shipment: Shipment;
  toggleSelect: (id: string) => void;
  toggleExpand: (id: string) => void;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({
  shipment,
  toggleSelect,
  toggleExpand,
}) => {
  const handleCall = (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) =>
      console.error("Failed to make a call", err)
    );
  };

  const handleWhatsApp = (phoneNumber: string) => {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=Hello`;
    Linking.openURL(whatsappUrl).catch((err) =>
      console.error("Failed to open WhatsApp", err)
    );
  };

  const phoneNumber = shipment.mobile;

  return (
    <View style={[styles.card, shipment.isSelected && styles.cardSelected]}>
      <View style={[styles.cardHeader,shipment.isExpanded && {borderBottomRightRadius:0, borderBottomLeftRadius:0}]}>
        <TouchableOpacity onPress={() => toggleSelect(shipment.id)}>
          <Ionicons
            name={shipment.isSelected ? "checkbox" : "square-outline"}
            size={24}
            color={shipment.isSelected ? "#007aff" : "#D0D5DD"}
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/box.png")}
          style={{ height: 30, width: 30, marginHorizontal: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "400", color: "#3F395C" }}>AWB</Text>
          <Text style={{ fontWeight: "bold", color: "#000000", fontSize: 15 }}>
            {shipment.awb}
          </Text>
          <View style={styles.routeContainer}>
            <Text>{shipment.origin.city}</Text>
            <Ionicons name="arrow-forward" size={14} color="#007aff" />
            <Text>{shipment.destination.city}</Text>
          </View>
        </View>
        <Text style={[styles.statusBadge, getStatusStyle(shipment.status)]}>
          {shipment.status}
        </Text>
        <TouchableOpacity
          onPress={() => toggleExpand(shipment.id)}
          style={styles.expandBox}
        >
          <MaterialCommunityIcons
            name="arrow-expand"
            size={18}
            color="#4561DB"
          />
        </TouchableOpacity>
      </View>
      {shipment.isExpanded && (
        <View style={styles.cardFooter}>
          <View style={{ gap:3,flexDirection: "row", alignItems: "center",justifyContent:"space-around", marginBottom:5 }}>
            <View style={styles.info}>
              <Text style={styles.blueText}>Origin</Text>
              <Text style={styles.cityText}>{shipment.origin.city}</Text>
              <Text style={styles.addressText}>{shipment.origin.address}</Text>
            </View>

            <Ionicons name="arrow-forward" size={20} color="#007aff" />

            <View style={styles.info}>
            <Text style={styles.blueText}>Destination</Text>
              <Text style={styles.cityText}>{shipment.destination.city}</Text>
              <Text style={styles.addressText}>{shipment.destination.address}</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleCall(phoneNumber)}
            >
              <Ionicons name="call-outline" size={18} color="#fff" />
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.whatsappButton]}
              onPress={() => handleWhatsApp(phoneNumber)}
            >
              <Ionicons name="logo-whatsapp" size={18} color="#fff" />
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Received":
      return styles.received;
    case "Canceled":
      return styles.canceled;
    case "Putaway":
      return styles.putAway;
    case "Delivered":
      return styles.delivered;
    case "Rejected":
      return styles.rejected;
    case "Lost":
      return styles.lost;
    case "On Hold":
      return styles.onHold;
    default:
      return {};
  }
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F4F2F8",
    marginVertical: 6,
    borderRadius:10,
    overflow: "hidden"
  },
  cardSelected: { borderWidth: 1, borderColor: "#007aff" },
  cardHeader: { 
    padding:12,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: "row",
    alignItems: "center", 
    backgroundColor: "#F4F2F8",
    height: 75,
    paddingHorizontal: 12,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  statusBadge: {
    textTransform: "uppercase",
    padding: 6,
    borderRadius: 4,
    fontSize: 12,
    marginRight: 8,
    textAlign: "center",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  received: { backgroundColor: "#D9E6FD", color: "#2F50C1" },
  canceled: { backgroundColor: "#F4F2F8", color: "#58536E" },
  putAway: { backgroundColor: "#E8DAF6", color: "#8C4CC9" },
  delivered: { backgroundColor: "#D8F5E1", color: "#2DC573" },
  rejected: { backgroundColor: "#FDE0E0", color: "#FF3B3B" },
  lost: { backgroundColor: "#F4F4F4", color: "#757575" },
  onHold: { backgroundColor: "#FDE6D9", color: "#FF944D" },
  cardFooter: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopWidth: 2,
    borderTopColor: "#FFFFFF",
    borderStyle:"dotted",
    backgroundColor:"#F4F2F880",
    padding: 12,
    paddingBottom:0
  },
  info: { marginBottom: 8,maxWidth:'48%' },
  actions: { flexDirection: "row", justifyContent: "flex-end",gap:14 },
  button: {
    paddingHorizontal: 18,
    paddingVertical:12,
    backgroundColor: "#6E91EC",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom:12
  },
  whatsappButton: { backgroundColor: "#25D366" },
  buttonText: { color: "#fff", fontWeight: "bold", marginLeft: 5 },
  routeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  expandBox: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3000,
    width: 25,
    height: 25,
    padding: 4,
  },
  blueText: {fontWeight:"400",color:"#2F50C1",fontSize:11},
  cityText: {fontWeight:"400",color:"#000000",fontSize:16},
  addressText: {fontWeight:"300",color:"#58536E",fontSize:13}
});

export default ShipmentCard;
