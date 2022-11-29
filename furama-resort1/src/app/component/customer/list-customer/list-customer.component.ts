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
  page = 0;
  size;
  totalPage;
  cuTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(
      types => this.cuTypeList = types);
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.customerTypeService.getAll().subscribe(typeList => {
      this.cuTypeList = typeList;
    });

  }

  getAllCustomer() {
    this.customerService.getAll(this.page).subscribe(customerData => {
      this.customerList = customerData.content;
      console.log(this.customerList);
      this.totalPage = customerData.totalPages;
      this.size = customerData.size;
    });
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
  search(name: string, phone: string, email: string, typeName: string) {
    this.customerService.search(name, phone, email, typeName,this.page).subscribe(customerPage => {
      this.customerList = customerPage.content;
      this.totalPage = customerPage.totalPages;
      this.size = customerPage.size;
    });
  }


  searchMulti(keyword: string) {
    this.customerService.searchMulti(keyword).subscribe(customerList => {
      this.customerList = customerList;
    });
  }

  previous() {
    if (this.page > 0) {
      this.page--;
      this.getAllCustomer();
    }
  }

  next() {
    if (this.page < this.totalPage-1) {
      this.page++;
      this.getAllCustomer();
    }
  }
}
