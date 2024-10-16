  import { Shipment } from "./types/Shippment.types";

    export const ShipmentData:Shipment[] = [
    {
      id: "1",
      status: "Received",
      awb: "41785691423",
    
      origin: {
        city: "Alexandria",
        // address: " Egypt"
        address: "456 Mediterranean Ave, Alexandria, Egypt"
      },
      destination: {
        city: "Cairo",
        address: "123 Nile St, Cairo, Egypt"
        // address: "Egypt"
      },
      mobile: "+201234567890",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "2",
      status: "Canceled",
      awb: "41785691424",
      origin: {
        city: "Cairo",
        address: "789 Pyramids Rd, Cairo, Egypt"
      },
      destination: {
        city: "Alexandria",
        address: "101 Coastal Blvd, Alexandria, Egypt"
      },
      mobile: "+201234567891",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "3",
      status: "Putaway",
      awb: "41785691425",
      origin:  {
        city: "Giza",
        address: "202 Sphinx St, Giza, Egypt"
      },
      destination: {
        city: "Aswan",
        address: "303 Nile River Rd, Aswan, Egypt"
      },
      mobile: "+201234567892",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "4",
      status: "Delivered",
      awb: "41785691426",
    
      origin:{
        city: "Luxor",
        address: "404 Karnak St, Luxor, Egypt"
      },
      destination: {
        city: "Hurghada",
        address: "505 Red Sea Rd, Hurghada, Egypt"
      },
      mobile: "+201234567893",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "5",
      status: "Rejected",
      awb: "41785691427",
    
      origin:  {
        city: "Alexandria",
        address: "606 Alexandria Corniche, Alexandria, Egypt"
      },
      destination: {
        city: "Marsa Matruh",
        address: "707 Matruh St, Marsa Matruh, Egypt"
      },
      mobile: "+201234567894",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "6",
      status: "Lost",
      awb: "41785691428",
      origin:  {
        city: "Suez",
        address: "808 Suez Canal Rd, Suez, Egypt"
      },
      destination: {
        city: "Port Said",
        address: "909 Port Said St, Port Said, Egypt"
      },
      mobile: "+201234567895",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "7",
      status: "On Hold",
      awb: "41785691429",
      origin: {
        city: "Cairo",
        address: "123 Tahrir Square, Cairo, Egypt"
      },
      destination:{
        city: "Sharm El Sheikh",
        address: "456 Sharm El Sheikh Blvd, Sharm El Sheikh, Egypt"
      },
      mobile: "+201234567896",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "8",
      status: "Received",
      awb: "41785691430",
      origin:  {
        city: "Alexandria",
        address: "789 Alexandria Central St, Alexandria, Egypt"
      },
      destination:  {
        city: "Cairo",
        address: "101 Cairo Main Rd, Cairo, Egypt"
      },
      mobile: "+201234567897",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "9",
      status: "Canceled",
      awb: "41785691431",
      origin: {
        city: "Luxor",
        address: "202 Luxor Temple Rd, Luxor, Egypt"
      },
      destination: {
        city: "Aswan",
        address: "303 Aswan High Dam Rd, Aswan, Egypt"
      },
      mobile: "+201234567898",
      isSelected: false,
      isExpanded: false,
    },
    {
      id: "10",
      status: "Putaway",
      awb: "41785691432",
      origin: {
        city: "Hurghada",
        address: "404 Hurghada Marina Rd, Hurghada, Egypt"
      },
      destination:{
        city: "Luxor",
        address: "505 Luxor West Bank Rd, Luxor, Egypt"
      },
      mobile: "+201234567899",
      isSelected: false,
      isExpanded: false,
    },
  ];
