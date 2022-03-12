import DeviceStore from "../store/DeviceStore";
import UserStore from "../store/UserStore";

export interface AppProviderType {
  user: UserStore;
  device: DeviceStore;

}