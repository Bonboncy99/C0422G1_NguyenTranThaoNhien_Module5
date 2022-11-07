import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] = [
    {
      id: 1,
      name: 'Nguyễn Văn An',
      dateOfBirth: '1970-11-07',
      idCard: '456231786',
      salary: 10000000,
      phone: '0901234121',
      email: 'thaonhien9991@gmail.com',
      address: '295 Nguyễn Tất Thành, Đà Nẵng',
      position: 'Giasm doc',
      educationDegree: 'trung cap',
      division: 'quan ly'
    },
    {
      id: 2,
      name: 'Lê Văn Bình',
      dateOfBirth: '1997-04-09',
      idCard: '654231234',
      salary: 7000000,
      phone: '0934212314',
      email: 'dsvdv@gmail.com',
      address: '22 Yên Bái, Đà Nẵng',
      position: 'quan ly',
      educationDegree: 'dai hoc',
      division: 'marketing'
    },
    {
      id: 3,
      name: 'Hồ Thị Yến',
      dateOfBirth: '1995-12-12',
      idCard: '999231723',
      salary: 14000000,
      phone: '0412352315',
      email: '12224@14124.com',
      address: 'K234/11 Điện Biên Phủ, Gia Lai',
      position: 'phuc vu',
      educationDegree: 'sau dai hoc',
      division: 'nhan vien'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
