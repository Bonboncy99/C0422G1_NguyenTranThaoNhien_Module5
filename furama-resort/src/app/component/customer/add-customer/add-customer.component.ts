import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customer-type';
import {CustomerService} from '../../../service/customer.service';
import {CustomerTypeService} from '../../../service/customer-type.service';
import {Router} from '@angular/router';
import {checkAge} from '../../../common/ValidateDate';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  formCreate: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶ' +
      'ÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợ' +
      'ãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\\s{1}([A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢ' +
      'ÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠƠÔƯĂÊÂĐ]{1})[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫự' +
      'ỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+))+$')]),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
    dateOfBirth: new FormControl('', [Validators.required, checkAge]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{5,7}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090)\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required])
  });

  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    customerTypeService.getAll().subscribe(listType => {
      this.customerTypeList = listType;
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.formCreate.valid) {
      const customer = this.formCreate.value;
      this.customerService.create(customer).subscribe(() => {
        this.router.navigateByUrl('/customer');
      });
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Create Success',
      showConfirmButton: true,
      timer: 1500
    })
  }

  get customerCode() {
    return this.formCreate.get('customerCode');
  }

  get name() {
    return this.formCreate.get('name');
  }

  get idCard() {
    return this.formCreate.get('idCard');
  }

  get phone() {
    return this.formCreate.get('phone');
  }

  get email() {
    return this.formCreate.get('email');
  }

  get address() {
    return this.formCreate.get('address');
  }

  get type() {
    return this.formCreate.get('customerType');
  }

  get gender() {
    return this.formCreate.get('gender');
  }

  get dateOfBirth() {
    return this.formCreate.get('dateOfBirth');
  }


  // checkDate(date) {
  //   const now = Date.now();
  //   date = Date.parse(date);
  //   // const  year = date.until(now).ge
  // }
}
