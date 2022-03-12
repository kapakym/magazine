import { makeAutoObservable } from "mobx";
import { DeviceType } from "../types/types";

export default class DeviceStore {
  _types: Array<{
    id: number;
    name: string;
  }>;
  _brands: Array<{ id: number; name: string }>;
  _device: Array<DeviceType>;
  _selectedType: { id: number; name: string } = { id: -1, name: "" };
  _selectedBrand: { id: number; name: string } = { id: -1, name: "" };

  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
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
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
      {
        id: 6,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
      {
        id: 7,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
      {
        id: 8,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
      {
        id: 9,
        name: "Iphone 12 pro",
        price: 120000,
        rating: 5,
        img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
      },
    ];
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
