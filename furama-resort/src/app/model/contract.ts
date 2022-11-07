import {Facility} from './facility';

export interface Contract {
  id: number;
  facility: string;
  customer: string;
  startDate: string;
  endDate: string;
  deposit: number;
  total: number;
}
