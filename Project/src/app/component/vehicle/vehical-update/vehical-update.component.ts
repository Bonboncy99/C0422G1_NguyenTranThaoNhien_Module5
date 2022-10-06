import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VehicleService} from "../../../service/vehicle.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Vehicle} from "../../../model/vehicle";
import Swal from "sweetalert2";
import {checkHour} from "../../../common/ValidateVehicle";
import {PositionService} from "../../../service/position.service";
import {PositionPr} from "../../../model/position-pr";

@Component({
  selector: 'app-vehical-update',
  templateUrl: './vehical-update.component.html',
  styleUrls: ['./vehical-update.component.css']
})
export class VehicalUpdateComponent implements OnInit {

  // formUpdate: FormGroup;
  // vehicleUpdate: Vehicle;
  // idUpdate: number;
  // locationList = ["Đà Nẵng", "Quảng Trị,","Huế"];
  // constructor(private activatedRoute: ActivatedRoute, private router: Router,
  //             private vehicleService: VehicleService) {
  //   this.activatedRoute.paramMap.subscribe(paraMap => {
  //     this.idUpdate = +paraMap.get('id')
  //     console.log(this.idUpdate)
  //   })
  // }
  //
  //
  // ngOnInit(): void {
  //   this.getOldValue();
  // }
  //
  // getOldValue() {
  //   this.vehicleService.findById(this.idUpdate).subscribe(vehicle => {
  //     console.log(vehicle)
  //     this.vehicleUpdate = vehicle;
  //   }, (err) => {
  //     console.log(err)
  //   }, () => {
  //     this.updateForm();
  //   })
  // }
  //
  // updateForm() {
  //   this.formUpdate = new FormGroup({
  //
  //     name:new FormControl(this.vehicleUpdate.name, [Validators.required]),
  //     vehicleType:new FormControl(this.vehicleUpdate.vehicleType, [Validators.required]),
  //     fromPoint:new FormControl(this.vehicleUpdate.fromPoint, [Validators.required]),
  //     endPoint:new FormControl(this.vehicleUpdate.endPoint, [Validators.required]),
  //     phone:new FormControl(this.vehicleUpdate.phone, [Validators.required]),
  //     email:new FormControl(this.vehicleUpdate.email, [Validators.required]),
  //     startTime:new FormControl(this.vehicleUpdate.startTime, [Validators.required]),
  //     endTime:new FormControl(this.vehicleUpdate.email, [Validators.required])
  //   })
  // }
  //
  // submit() {
  //   const vehicle = this.formUpdate.value;
  //   vehicle.id = this.idUpdate;
  //   this.vehicleService.update(vehicle).subscribe(()=>{
  //     this.router.navigateByUrl("");
  //     Swal.fire({
  //       position: 'top-end',
  //       icon: 'success',
  //       title: 'Delete Success!',
  //       showConfirmButton: false,
  //       timer: 1500
  //     })
  //   })
  // }
  idUpdate;
  formUpdate: FormGroup;
  vehicleUpdate: Vehicle;
  locationList = ["Đà Nẵng", "Quảng Trị", "Huế"];
  positionList: PositionPr[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private vehicleService: VehicleService,
              private positionService: PositionService) {
    activatedRoute.paramMap.subscribe(paramMap => {
      this.idUpdate = paramMap.get('id');
    });


    // positionService.getAll().subscribe(positions => {
    //   this.positionList = positions;
    // })
  }

  startUpdate() {
    this.vehicleService.findById(this.idUpdate).subscribe((vehicle) => {
      this.vehicleUpdate = vehicle;
    }, () => {

    }, () => {
      this.updateForm();
    });
  }

  updateForm() {
    this.formUpdate = new FormGroup({
      id: new FormControl(this.vehicleUpdate.id, [Validators.required]),
      name: new FormControl(this.vehicleUpdate.name, [Validators.required]),
      vehicleType: new FormControl(this.vehicleUpdate.vehicleType, [Validators.required]),
      fromPoint: new FormControl(this.vehicleUpdate.fromPoint, [Validators.required]),
      endPoint: new FormControl(this.vehicleUpdate.endPoint, [Validators.required]),
      phone: new FormControl(this.vehicleUpdate.phone, [Validators.required, Validators.pattern('(^093|094|097)\\d{7}$')]),
      email: new FormControl(this.vehicleUpdate.email, [Validators.required, Validators.email]),
      startTime: new FormControl(this.vehicleUpdate.startTime, [Validators.required,checkHour]),
      endTime: new FormControl(this.vehicleUpdate.endTime, [Validators.required,checkHour])
    });
  }

  ngOnInit(): void {
    this.startUpdate();
  }

  submit() {
    if (this.formUpdate.valid) {
      const vehicle = this.formUpdate.value;
      vehicle.id = this.idUpdate;
      console.log(vehicle)
      this.vehicleService.update(vehicle).subscribe(()=>{
        this.router.navigateByUrl('list')
        Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Update Success!',
                  showConfirmButton: false,
                  timer: 1500
                })
      })
      // this.positionService.findById(vehicle.fromPoint).subscribe((positionStart) => {
      //       //   vehicle.fromPoint = positionStart;
      //       // },()=>{
      //       //
      //       // },()=>{
      //       //   this.positionService.findById(vehicle.endpoint).subscribe((positionEnd) => {
      //       //     vehicle.endPoint = positionEnd;
      //       //   },()=>{
      //       //   },()=>{
      //       //     this.vehicleService.update(vehicle).subscribe(() => {
      //       //       this.router.navigateByUrl("list");
      //       //     })
      //       //   })
      //       // })



      // this.positionService.findById(vehicle.fromPoint).subscribe(start=>{
      //   vehicle.fromPoint = start;
      //   console.log(start)
      // },()=>{
      //
      // },()=>{
      //   this.positionService.findById(vehicle.fromPoint).subscribe(end=>{
      //     vehicle.endpoint = end;
      //     console.log(end)
      //   },()=>{
      //
      //   },()=>{
      //     this.vehicleService.update(vehicle).subscribe(()=>{
      //       console.log(vehicle)
      //       this.router.navigateByUrl('list');
      //     })
      //   })
      // })


      // this.positionService.findById(vehicle.fromPoint).subscribe(start=>{
      //   vehicle.fromPoint = start;
      //   console.log(start)
      //   console.log(vehicle.endPoint)
      //   this.positionService.findById(vehicle.endpoint).subscribe(end=>{
      //       console.log(end)
      //     vehicle.endpoint = end;
      //     this.vehicleService.update(vehicle).subscribe(()=>{
      //       console.log(vehicle)
      //       this.router.navigateByUrl('list');
      //       Swal.fire({
      //         position: 'top-end',
      //         icon: 'success',
      //         title: 'Update Success!',
      //         showConfirmButton: false,
      //         timer: 1500
      //       })
      //     })
      //   })
      // })

    }

  }

  get name() {
    return this.formUpdate.get('name');
  }

  get vehicleType() {
    return this.formUpdate.get('vehicleType');
  }

  get phone() {
    return this.formUpdate.get('phone');
  }

  get email() {
    return this.formUpdate.get('email');
  }

  get fromPoint() {
    return this.formUpdate.get('fromPoint');
  }

  get endPoint() {
    return this.formUpdate.get('endPoint');
  }

  get startTime() {
    return this.formUpdate.get('startTime');
  }

  get endTime() {
    return this.formUpdate.get('endTime');
  }
}
