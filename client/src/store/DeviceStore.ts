import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  _types: Array<{
    id: number;
    name: string;
  }>;
  _brands: Array<{ id: number; name: string }>;
  _device: Array<{
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
  }>;

  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._device = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types: any) {
    this._types = types;
  }

  setBrands(brands: any) {
    this._brands = brands;
  }

  setDevices(devices: any) {
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
}
