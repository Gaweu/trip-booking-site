import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employees: { image: string, firstName: string, lastName: string, description: string }[] = [
    { "image": "../../../assets/employee-photos/employee1.jpg","firstName": "John", "lastName": "Billy", "description": "I like trains" },
    { "image": "../../../assets/employee-photos/employee2.jpg","firstName": "Bob", "lastName": "Krasinski", "description": "I like trains" },
    { "image": "../../../assets/employee-photos/employee3.jpg","firstName": "John", "lastName": "Billy", "description": "I like trains" },
  ];

  tripOffers: {image: string, tripDestination: string, tripDescription: string}[] = [
    { "image": "../../../assets/employee-photos/employee1.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/employee-photos/employee2.jpg","tripDestination": "Bob", "tripDescription": "Krasinski" },
    { "image": "../../../assets/employee-photos/employee3.jpg","tripDestination": "John", "tripDescription": "Billy" },
  ]

}
