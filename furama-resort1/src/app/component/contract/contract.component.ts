import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [
    {
      id: 1,
      facility: 'Villa',
      customer: 'Nhien',
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      total: 43253
    },
    {
      id: 2,
      facility: 'room',
      customer: 'Bon',
      startDate: '2020-07-14',
      endDate: '2020-07-21',
      deposit: 200000,
      total: 135400
    },
    {
      id: 1,
      facility: 'house',
      customer: 'Cy',
      startDate: '2021-03-15',
      endDate: '2021-03-17',
      deposit: 50000,
      total: 454352
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
