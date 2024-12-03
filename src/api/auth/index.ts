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
  return httpClient
    .post(AUTH_ENDPOINTS.REGISTER, payload)
    .then((res) => res.data);
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
    .get<UserResponse>(AUTH_ENDPOINTS.USER)
    .then((res) => res.data);
};
