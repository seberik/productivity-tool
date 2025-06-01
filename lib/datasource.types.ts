export interface Filter {
  id: string;
  name: string;
}

export interface Device {
  id: string;
  line: {
    id: string;
    name: string;
  };
  product: {
    name: string;
  };
  images: {
    default: string;
  };
}

export interface DeviceList {
  devices: Device[];
}
