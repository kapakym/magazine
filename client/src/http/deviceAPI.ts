import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";
import { TypeType } from "../types/types";

export const createType = async (nameType: string) => {
  const { data } = await $authHost.post("api/type", {
    name: nameType,
  });

  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");

  return data;
};

export const createBrand = async (nameType: string) => {
  const { data } = await $authHost.post("api/brand", {
    name: nameType,
  });

  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");

  return data;
};

export const createDeivce = async (device: FormData) => {
  // try {
    const { data } = await $authHost.post("api/device", device);
    console.log("OK");
    return data;
  // } catch (error) {
  //   console.log(error);
  // }
};

export const fetchDevice = async () => {
  const { data } = await $host.get("api/device");

  return data;
};

export const fetchOneDevice = async (id: number) => {
  
  const { data } = await $host.get("api/device/" + id);
  console.log(data)
  return data;
};
