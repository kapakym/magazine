import { makeAutoObservable } from "mobx";
import { DeviceType } from "../types/types";

export default class DeviceStore {
  _types: Array<{
    id: number;
    name: string;
  }>;
  _brands: Array<{ id: number; name: string }>;
  _device: Array<DeviceType>;
  _selectedType: { id: number; name: string } | undefined;//  = { id: -1, name: "" };
  _selectedBrand: { id: number; name: string } | undefined;// { id: -1, name: "" };

  constructor() {
    this._types = [];
    this._brands = [];
    this._device = [];
    makeAutoObservable(this);
  }

  setSelectedType(type: any) {
    this._selectedType = type;
  }

  setSelectedBrand(brand: any) {
    this._selectedBrand = brand;
  }

  setTypes(types: any) {
    this._types = types;
  }

  setBrands(brands: any) {
    this._brands = brands;
  }

  setDevices(devices: Array<DeviceType>) {
    this._device = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._device;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
