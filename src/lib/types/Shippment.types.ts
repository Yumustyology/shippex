export interface Shipment {
  id: string;
  status: string;
  awb: string;
  origin:{
    city:string;
    address:string;
  };
   destination: {
    city:string;
    address:string;
  };
  isSelected: boolean;
  isExpanded: boolean;
  mobile: string;
}
