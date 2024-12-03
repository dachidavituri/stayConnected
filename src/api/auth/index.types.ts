export type LoginPayload = {
  payload: { email: string; password: string };
};
export type RegisterPayload = {
  payload: {
    username: string;
    email: string;
    password: string;
    password2: string;
  };
};

export type RefreshPayload = {
  payload: {
    refresh: string;
  };
};

export type UserResponse = {
  email: string;
  username: string;
};
