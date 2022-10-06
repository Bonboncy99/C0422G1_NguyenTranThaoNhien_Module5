import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../../model/vehicle";
import {VehicleService} from "../../../service/vehicle.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-vehical-list',
  templateUrl: './vehical-list.component.html',
  styleUrls: ['./vehical-list.component.css']
})
export class VehicalListComponent implements OnInit {
  vehicleDelete:Vehicle;
  vehicleList: Vehicle[] = [];
  page:number = 0;
  size:number
  totalPage:number

  constructor(private vehicleService: VehicleService) {
  }


  ngOnInit(): void {
    this.getAll()
  }

  delete(id: number) {
      this.vehicleService.deleteById(id).subscribe(()=>{
        this.ngOnInit()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Delete Success!',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }

  getAll(){
    this.vehicleService.getAll(this.page).subscribe(vehiclePage => {
      console.log(vehiclePage)
      this.vehicleList = vehiclePage.content
      this.totalPage = vehiclePage.totalPages;
      this.size = vehiclePage.size
    })
  }
  getVehicleDelete(vehicle: Vehicle) {
        this.vehicleDelete = vehicle
  }

  previousPage() {
    this.page--
    this.getAll();
  }

  nextPage() {
    this.page++;
    this.getAll();


  }
}
