import { User } from "@pck/papuga-types";

export type UserEntry = Omit<User, "createdAt" | "updatedAt" | "avatar"> & {
  attributes?: {
    avatar?: string[];
  };
};
