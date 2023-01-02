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

export type OrderStatus = 'SHIPPING_UNASSIGNED' | 'SHIPPING_ASSIGNED' | 'FULFILLED' | 'CLOSED';

export interface Order {
  id: number;
  jerseySize: JerseySizeType | null;
  shippingAddress: ShippingAddress | null;
  status: OrderStatus;
}

export interface UserModel {
  mi777Balance: number | null | any;
  wallet: string | null;
  orders: Order[];
}