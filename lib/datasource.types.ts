export interface Filter {
  id: string;
  name: string;
}

interface Attribute {
  label: string;
  value: string | number;
}

export interface Device {
  id: string;
  name: string;
  line: {
    id: string;
    name: string;
  };
  images: {
    default: string;
  }
  attributes: Attribute[]
}

export interface DeviceList {
  devices: Device[];
}
