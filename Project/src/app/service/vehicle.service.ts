import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle} from "../model/vehicle";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  getAll(page:number): Observable<any> {
    return this.http.get('http://localhost:8080/vehicles?page='+page)
  }

  findById(id: number): Observable<any>{
    return this.http.get('http://localhost:3000/vehicles/'+id);

  }

  add(vehicle:Vehicle){
    return this.http.post('http://localhost:8080/vehicles', vehicle);
  }

  update(vehicle:Vehicle){
  return this.http.patch('http://localhost:8080/vehicles', vehicle);
  }

  deleteById(id:number):Observable<any>{
    return this.http.delete('http://localhost:8080/vehicles/'+id);
  }
}
