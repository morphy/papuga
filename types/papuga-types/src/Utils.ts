export interface Timestamp {
  createdAt: Date;
  updatedAt: Date;
}

export interface SoftDelete {
  deletedAt?: Date;
}

export type PartialOmitRequire<
  T,
  O extends keyof T,
  R extends keyof T
> = Partial<Omit<T, O>> & Required<Pick<T, R>>;

export type PartialOmit<T, O extends keyof T> = Partial<Omit<T, O>>;
