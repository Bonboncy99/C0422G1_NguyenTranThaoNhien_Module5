import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {checkHour} from "../../../common/ValidateVehicle";
import {Router} from "@angular/router";
import {VehicleService} from "../../../service/vehicle.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-vehical-create',
  templateUrl: './vehical-create.component.html',
  styleUrls: ['./vehical-create.component.css']
})
export class VehicalCreateComponent implements OnInit {
  locationList = ["Đà Nẵng", "Quảng Trị", "Huế"];
  formCreateVehical: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    vehicleType: new FormControl('', [Validators.required]),
    fromPoint: new FormControl('', [Validators.required]),
    endPoint: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('(^093|094|097)\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    startTime: new FormControl('', [Validators.required, checkHour]),
    endTime: new FormControl('', [Validators.required, checkHour])
  })

  constructor(private  router: Router, private vehicleService: VehicleService) {

  }

  ngOnInit(): void {
  }

  get name() {
    return this.formCreateVehical.get('name');
  }

  get vehicleType() {
    return this.formCreateVehical.get('vehicleType');
  }

  get phone() {
    return this.formCreateVehical.get('phone');
  }

  get email() {
    return this.formCreateVehical.get('email');
  }

  get fromPoint() {
    return this.formCreateVehical.get('fromPoint');
  }

  get endPoint() {
    return this.formCreateVehical.get('endPoint');
  }

  get startTime() {
    return this.formCreateVehical.get('startTime');
  }

  get endTime() {
    return this.formCreateVehical.get('endTime');
  }

  submit() {
    if (this.formCreateVehical.valid){
      const vehicle = this.formCreateVehical.value;
      console.log(vehicle)
      this.vehicleService.add(vehicle).subscribe(() => {
        this.router.navigateByUrl('list')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Update Success!',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
  }
}
