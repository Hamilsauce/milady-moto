// export type JerseySize
export enum JerseySize {
  XSmall,
  Small,
  Medium,
  Large,
  XLarge,
  XXLarge,
  XXXLarge
}
export type JerseySizeType =
  'XSmall' |
  'Small' |
  'Medium' |
  'Large' |
  'XLarge' |
  'XXLarge' |
  'XXXLarge'

export interface ShippingAddress {
  name: string;
  address1: string;
  address2?: string | null;
  city: string;
  postalCode: string;
  stateProvince: string;
  country: string;
}

export type OrderStatus = 'MINTED' | 'SHIPPING_ASSIGNED' | 'FULFILLED' | 'CLOSED';

export interface Order {
  jerseySize: JerseySizeType;
  shippingAddress: ShippingAddress;
  status: OrderStatus;
}

export interface UserModel {
  mi777Balance: number | null | any;
  wallet: string | null;
  orders: Order[];
}