import { makeAutoObservable } from "mobx";
import { DeviceType } from "../types/types";

export default class DeviceStore {
  _types: Array<{
    id: number;
    name: string;
  }>;
  _brands: Array<{ id: number; name: string }>;
  _device: Array<DeviceType>;
  _selectedType: { id: number; name: string } | undefined; //  = { id: -1, name: "" };
  _selectedBrand: { id: number; name: string } | undefined; // { id: -1, name: "" };
  _page = 1;
  _totalCount = 0;
  _limit = 3;
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
    this.setPage(1)
    this._types = types;
  }

  setBrands(brands: any) {
    this.setPage(1)
    this._brands = brands;
  }

  setDevices(devices: Array<DeviceType>) {
    this._device = devices;
  }

  setPage(page: number) {
    this._page = page;
  }

  setTotalCount(count: number) {
    this._totalCount = count;
  }

  setLimit(limit: number) {
    this._totalCount = limit;
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

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
