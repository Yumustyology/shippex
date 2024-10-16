import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Camera, CameraView } from "expo-camera";

interface ScannerProps {
  onScanSuccess: (data: string) => void;
  onClose: () => void;
  isPage?: boolean;
}

const CodeScanner: React.FC<ScannerProps> = ({
  onScanSuccess,
  onClose,
  isPage,
}) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScannedData(data);
    onScanSuccess(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
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
      {!isPage ? (
        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel Scan</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default CodeScanner;
