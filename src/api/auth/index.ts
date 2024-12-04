/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "..";
import { AUTH_ENDPOINTS } from "./index.enum";
import {
  LoginPayload,
  RefreshPayload,
  RegisterPayload,
  UserResponse,
} from "./index.types";

export const login = async ({ payload }: LoginPayload) => {
  return httpClient.post(AUTH_ENDPOINTS.LOGIN, payload).then((res) => res.data);
};

export const register = async ({ payload }: RegisterPayload) => {
  try {
    const res: any = await httpClient.post(AUTH_ENDPOINTS.REGISTER, payload);

    const errorMessage =
      res?.response?.data?.email || res?.response?.data?.username;
    if (errorMessage) {
      throw new Error(errorMessage);
    }

    if (res?.data) {
      return res.data;
    }
  } catch (error: any) {
    if (error?.message) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const logout = async () => {
  return httpClient.post(AUTH_ENDPOINTS.LOGOUT).then((res) => res.data);
};

export const refresh = async ({ payload }: RefreshPayload) => {
  return httpClient
    .post(AUTH_ENDPOINTS.REFRESH, payload)
    .then((res) => res.data);
};

export const getMe = async () => {
  return httpClient
    .get<UserResponse>(AUTH_ENDPOINTS.USER, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
    .then((res) => res.data || "No User");
};
