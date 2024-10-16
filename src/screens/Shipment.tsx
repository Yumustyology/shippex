import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import SafeAreaContainer from "../components/molecules/SafeAreaContainer";
import RBSheet from "react-native-raw-bottom-sheet";
import { Shipment as ShipmentType } from "../lib/types/Shippment.types";
import Header from "../components/atoms/Header";
import ButtonsRow from "../components/molecules/ButtonsRow";
import SearchBar from "../components/atoms/SearchBar";
import ShipmentList from "../components/molecules/ShippmentList";
import FilterBottomSheet from "../components/molecules/FilterBottomSheet";
import { ShipmentData } from "../lib/dummyData";
import CodeScanner from "../components/molecules/CodeScanner";

const Shipment: React.FC = () => {
  const [shipments, setShipments] = useState<ShipmentType[]>(ShipmentData);
  const [filteredShipments, setFilteredShipments] = useState<ShipmentType[]>(shipments);
  const [searchText, setSearchText] = useState<string>("");
  const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  
  const filterSheetRef = useRef<RBSheet>(null);

  const toggleSelectAll = () => {
    const newValue = !isSelectAll;
    setIsSelectAll(newValue);
    setFilteredShipments(
      filteredShipments.map((shipment) => ({
        ...shipment,
        isSelected: newValue,
      }))
    );
  };

  const toggleSelect = (id: string) => {
    setFilteredShipments((prevShipments) =>
      prevShipments.map((shipment) =>
        shipment.id === id
          ? { ...shipment, isSelected: !shipment.isSelected }
          : shipment
      )
    );
  };

  const toggleExpand = (id: string) => {
    setFilteredShipments((prevShipments) => {
      return prevShipments.map((shipment) => {
        if (shipment.id === id) {
          const updatedShipment = {
            ...shipment,
            isExpanded: !shipment.isExpanded,
          };
          return updatedShipment;
        }
        return shipment;
      });
    });
  };

  const handleScanSuccess = (data: string) => {
    alert(`Barcode data: ${data} has been scanned!`);
    setIsScanning(false);
  };

  const handleFilterChange = (selectedFilters: string[]) => {
    if (selectedFilters.length === 0) {
      setFilteredShipments(shipments);
    } else {
      const newFilteredShipments = shipments.filter((shipment) =>
        selectedFilters.includes(shipment.status)
      );
      setFilteredShipments(newFilteredShipments);
    }
  };

  const noShipmentsFound = filteredShipments.length === 0;

  return (
    <SafeAreaContainer style={{ padding: 16, backgroundColor: "#fff" }}>
      <Header />
      <View>
        <Text style={styles.subtleText}>Hello,</Text>
        <Text style={styles.greeting}>Ibrahim Shaker</Text>
      </View>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <ButtonsRow
        onFilterPress={() => filterSheetRef.current?.open()}
        onAddScanPress={() => setIsScanning(true)}
      />

      {noShipmentsFound ? (
        <Text style={styles.noShipmentsText}>No shipments found matching your criteria.</Text>
      ) : (
        <ShipmentList
          shipments={filteredShipments}
          searchText={searchText}
          toggleSelectAll={toggleSelectAll}
          isSelectAll={isSelectAll}
          toggleSelect={toggleSelect}
          toggleExpand={toggleExpand}
        />
      )}

      <RBSheet
        ref={filterSheetRef}
        height={360}
        openDuration={250}
        closeOnDragDown={true}
        draggable={true}
        dragOnContent={true}
        closeOnPressBack={true}
        useNativeDriver={false}
        customStyles={{
          wrapper: { backgroundColor: "rgba(0,0,0,0.5)" },
          draggableIcon: { backgroundColor: "#A7A3B3", marginBottom: 15 },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <FilterBottomSheet onFilterChange={handleFilterChange} close={() => filterSheetRef.current?.close()} />
      </RBSheet>

      <Modal
        visible={isScanning}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsScanning(false)}
      >
        <CodeScanner
          onScanSuccess={handleScanSuccess}
          onClose={() => setIsScanning(false)}
        />
      </Modal>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 28,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 24,
  },
  subtleText: {
    color: "#00000099",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
  },
  noShipmentsText: {
    fontSize: 16,
    color: "#FF3B3B", 
    textAlign: "center",
    marginVertical: 20,
  },
});

export default Shipment;
