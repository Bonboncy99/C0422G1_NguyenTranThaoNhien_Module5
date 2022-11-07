import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {CustomerType} from '../../../model/customer-type';
import {CustomerTypeService} from '../../../service/customer-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  deleteCustomer: Customer;
  detailCus: Customer;
  page = 1;
  cuTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(types => this.cuTypeList = types);
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customerData => {
      console.log(customerData);
      this.customerList = customerData;
    });
    this.customerTypeService.getAll().subscribe(typeList => {
      this.cuTypeList = typeList;
    });
    this.customerTypeService.getAll().subscribe(types => this.cuTypeList = types);

  }


  getDeleteCustomer(cus: Customer) {
    this.deleteCustomer = cus;
  }

  delete(id: number) {
    console.log(id);
    this.customerService.delete(id).subscribe(() => {
      this.ngOnInit();
      Swal.fire({
        icon: 'success',
        title: 'Delete success',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  getCustomer(cus: Customer) {
    this.detailCus = cus;
  }

  search(name: string, phone: string, email: string, typeId: string) {
    this.customerService.search(name, phone, email, typeId).subscribe(customerList => {
      this.customerList = customerList;
    });
  }


  searchMulti(keyword: string) {
    this.customerService.searchMulti(keyword).subscribe(customerList => {
      this.customerList = customerList;
    });
  }
}
