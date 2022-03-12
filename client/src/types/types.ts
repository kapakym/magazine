import DeviceStore from "../store/DeviceStore";
import UserStore from "../store/UserStore";

export interface AppProviderType {
  user: UserStore;
  device: DeviceStore;
}

export interface DeviceType {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}