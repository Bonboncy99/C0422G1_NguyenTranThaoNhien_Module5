import {PositionPr} from "./position-pr";

export interface Vehicle {
  id?:number;
  name?:string;
  vehicleType?:string;
  fromPoint?: string;
  endPoint?:string;
  phone?:string;
  email?:string;
  startTime?:string;
  endTime?:string;
}
