import { View, Text } from 'react-native'
import React from 'react'
import CodeScanner from '../components/molecules/CodeScanner'

const Scan = () => {
  const handleScanSuccess = (data: string) =>  alert(`Barcode data: ${data} has been scanned!`);
  return <CodeScanner onScanSuccess={handleScanSuccess} onClose={()=>{}} isPage/>
}

export default Scan