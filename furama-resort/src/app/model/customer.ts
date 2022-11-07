import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  customerCode: string;
  name: string;
  dateOfBirth: string;
  gender: boolean;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  customerType: CustomerType;
}
