import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  // facilityList: Facility[] = [
  //   {1, 'Villa Beach Front', 25000, 1000000, 10, 'vip', 'Có hồ bơi', 500, 4, '', 'theo ngay', 'villa'}
  // ];

  facility: Facility = {};
  facilityList: Facility[] = [
    {
      id: 1,
      name: 'Villa',
      area: 25000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloor: 4,
      facilityFree: '',
      rendType: 'theo ngay',
      facilityType: 'house'
    },
    {
      id: 2,
      name: ' Beach ',
      area: 25000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloor: 4,
      facilityFree: '',
      rendType: 'theo gio',
      facilityType: 'villa'
    },
    {
      id: 3,
      name: '  Front',
      area: 25000,
      cost: 1000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloor: 4,
      facilityFree: '',
      rendType: 'theo thang',
      facilityType: 'room'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  detail(facility: Facility) {
    this.facility = facility;
  }
}

