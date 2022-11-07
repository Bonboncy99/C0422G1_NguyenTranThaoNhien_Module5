import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer';
import {CustomerType} from '../../../model/customer-type';
import {log} from 'util';
import {count} from 'rxjs/operators';
import {checkAge} from '../../../common/ValidateDate';
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  idUpdate;
  formUpdate: FormGroup;
  customerUpdate: Customer;
  customerTypeList: CustomerType[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
    activatedRoute.paramMap.subscribe(paramMap => {
      this.idUpdate = paramMap.get('id');
    });
    this.customerTypeService.getAll().subscribe(types => this.customerTypeList = types);
  }

  startUpdate() {
    this.customerService.findById(this.idUpdate).subscribe((product) => {
      this.customerUpdate = product;
    }, () => {

    }, () => {
      this.updateForm();
    });
  }

  updateForm() {
    this.formUpdate = new FormGroup({
      name: new FormControl(this.customerUpdate.name, [Validators.required, Validators.pattern('^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶ' +
        'ÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợ' +
        'ãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\\s{1}([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢ' +
        'ÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫự' +
        'ỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+))+$')]),
      customerCode: new FormControl(this.customerUpdate.customerCode, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      dateOfBirth: new FormControl(this.customerUpdate.dateOfBirth, [Validators.required, checkAge]),
      gender: new FormControl(this.customerUpdate.gender, [Validators.required]),
      idCard: new FormControl(this.customerUpdate.idCard, [Validators.required, Validators.pattern('^\\d{5,7}$')]),
      phone: new FormControl(this.customerUpdate.phone, [Validators.required, Validators.pattern('^(091|090)\\d{7}$')]),
      email: new FormControl(this.customerUpdate.email, [Validators.required, Validators.email]),
      address: new FormControl(this.customerUpdate.address, [Validators.required]),
      customerType: new FormControl(this.customerUpdate.customerType.id, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.startUpdate();
  }

  submit() {
    this.customerUpdate = this.formUpdate.value;
    const idType = this.customerUpdate.customerType;
    this.customerTypeService.findById(+idType).subscribe(type => {
      this.customerUpdate.customerType = type;
      this.customerUpdate.id = this.idUpdate;
    }, () => {

    }, () => {
      this.customerService.update(this.customerUpdate).subscribe(() => {
        this.router.navigateByUrl('customer');
      });
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Update Success',
      showConfirmButton: true,
      timer: 1500
    })
  }
  get customerCode() {
    return this.formUpdate.get('customerCode');
  }

  get name() {
    return this.formUpdate.get('name');
  }

  get idCard() {
    return this.formUpdate.get('idCard');
  }

  get phone() {
    return this.formUpdate.get('phone');
  }

  get email() {
    return this.formUpdate.get('email');
  }

  get address() {
    return this.formUpdate.get('address');
  }

  get type() {
    return this.formUpdate.get('customerType');
  }

  get dateOfBirth() {
    return this.formUpdate.get('dateOfBirth');
  }
}
