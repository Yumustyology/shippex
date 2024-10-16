import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import SafeAreaContainer from "../components/molecules/SafeAreaContainer";
import RBSheet from "react-native-raw-bottom-sheet";
import { Shipment } from "../lib/types/Shippment.types";
import Header from "../components/atoms/Header";
import ButtonsRow from "../components/molecules/ButtonsRow";
import SearchBar from "../components/atoms/SearchBar";
import ShipmentList from "../components/molecules/ShippmentList";
import FilterBottomSheet from "../components/molecules/FilterBottomSheet";
import { Camera, CameraView } from "expo-camera"; // Correct import
import { ShipmentData } from "../lib/dummyData";

const ShipmentScreen: React.FC = () => {
  const [shipments, setShipments] = useState<Shipment[]>(ShipmentData);
  const [filteredShipments, setFilteredShipments] = useState<Shipment[]>(shipments);
  const [searchText, setSearchText] = useState<string>("");
  const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  
  const filterSheetRef = useRef<RBSheet>(null);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

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

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScannedData(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setIsScanning(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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
        <View style={styles.scannerContainer}>
          <CameraView
            onBarcodeScanned={scannedData ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: [
                "qr",
                "pdf417",
                "ean13",
                "ean8",
                "code128",
                "code39",
                "codabar",
              ],
            }}
            ratio="16:9"
            style={StyleSheet.absoluteFillObject}
          />
          {scannedData && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScannedData(null)}
            />
          )}
          <TouchableOpacity
            onPress={() => setIsScanning(false)}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>Cancel Scan</Text>
          </TouchableOpacity>
        </View>
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
  scannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  cancelButton: {
    position: "absolute",
    bottom: 30,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  cancelText: { fontSize: 16, color: "#000" },
  subtleText: {
    color: "#00000099",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 12,
  },
  noShipmentsText: {
    fontSize: 16,
    color: "#FF3B3B", 
    textAlign: "center",
    marginVertical: 20,
  },
});

export default ShipmentScreen;
