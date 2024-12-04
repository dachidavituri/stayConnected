import { login, logout, refresh, register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
export const useSignIn = () => {
  return useMutation({ mutationKey: ["sign-in"], mutationFn: login });
};
export const useSignUp = () => {
  return useMutation({ mutationKey: ["sign-up"], mutationFn: register });
};
export const useSignOut = () => {
  return useMutation({ mutationKey: ["sign-out"], mutationFn: logout });
};
export const useRefresh = () => {
  return useMutation({ mutationKey: ["refresh"], mutationFn: refresh });
};
