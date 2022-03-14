import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";
import { TypeType } from "../types/types";

export const createType = async (nameType: string) => {
  const { data } = await $authHost.post("api/type", {
    name: nameType,
  });

  return data;
};

export const fetchTypes = async (email: string, password: string) => {
  const { data } = await $host.get("api/type");

  return data;
};
