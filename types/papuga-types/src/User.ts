import { Timestamp } from "./Utils";

export interface User extends Timestamp {
  id: string;
  email: string;
  createdTimestamp: Date;
  enabled: boolean;
  avatar?: string;
  firstName?: string;
  lastName?: string;
}
