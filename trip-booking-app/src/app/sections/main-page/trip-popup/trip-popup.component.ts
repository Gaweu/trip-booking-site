import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-trip-popup',
  templateUrl: './trip-popup.component.html',
  styleUrls: ['./trip-popup.component.scss']
})
export class TripPopupComponent implements OnInit {

  selectedItem: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { selectedItem: any }) {
    this.selectedItem = data.selectedItem;
  }

  ngOnInit() {
  }

}
