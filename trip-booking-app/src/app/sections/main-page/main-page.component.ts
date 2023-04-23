import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TripPopupComponent } from './trip-popup/trip-popup.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @ViewChild('flexContainer', { static: false }) container: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('tripCarousel', { static: false }) tripSection: ElementRef<HTMLInputElement> = {} as ElementRef;

  openDialog(selectedItem: any) {
    const dialogRef = this.dialog.open(TripPopupComponent, {
      data: { myObject: selectedItem}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  MIN_GAP = 10;
  counter = 0;
  isScaled = false

  ngOnInit() {
    this.displayedTripOffers = this.tripOffers.slice(0, 1);
  }

  ngAfterViewInit(): void {
    let intervalId = setInterval(() => {
      if (this.isScaled == false) {
        this.updateCarousel()
      } else {
        clearInterval(intervalId);
      }
    }, 1);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCarousel()
  }

  private updateCarousel() {
    let containerWidth = this.container.nativeElement.offsetWidth;

    let items = this.container.nativeElement.children;
    let itemsLength = items.length;
    let totalWidth = 0;
    for (let i = 0; i < items.length; i++) {
    const child = items[i] as HTMLElement;
    totalWidth += child.offsetWidth;
    }

    let singleWidth = totalWidth/itemsLength


    const gap = Math.floor((containerWidth % totalWidth/itemsLength) / (this.displayedTripOffers.length - 1));
    if((gap < this.MIN_GAP) && (containerWidth < totalWidth + (itemsLength+1)*this.MIN_GAP))
    {
      this.displayedTripOffers = this.tripOffers.slice(this.counter, itemsLength+this.counter-1);
      console.log(false)
    }
    else if((containerWidth > (totalWidth+singleWidth) + (itemsLength+2)*this.MIN_GAP))
    {
      if(this.tripOffers[itemsLength+this.counter])
      {
        this.displayedTripOffers.push(this.tripOffers[itemsLength+this.counter]);
      }
      else if(this.tripOffers[this.counter-1])
      {
        this.displayedTripOffers.unshift(this.tripOffers[this.counter-1]);
      }
      console.log(true)
    }
    else {
      this.isScaled = true
    }
  }

  moveNext(): void {
    let currentArrayLength = this.displayedTripOffers.length;
    if(!this.tripOffers[currentArrayLength + this.counter])
    {
      console.log(false);
    }
    else
    {
      this.displayedTripOffers.shift();
      this.displayedTripOffers.push(this.tripOffers[currentArrayLength + this.counter]);
      this.counter++;
      console.log(this.counter);

    }

    console.log(this.displayedTripOffers);
  }

  movePrevious(): void {

    if(!this.tripOffers[this.counter-1])
    {
      console.log(false);
    }
    else
    {
      this.displayedTripOffers.pop();
      console.log(this.counter);
      this.counter--;
      this.displayedTripOffers.unshift(this.tripOffers[this.counter])
    }
  }

  disablePreviousButton(): boolean {
    if(this.counter == 0)
      return true;
    else
      return false;
  }




  employees: { image: string, firstName: string, lastName: string, description: string }[] = [
    { "image": "../../../assets/employee-photos/employee1.jpg","firstName": "John", "lastName": "Billy", "description": "I like trains" },
    { "image": "../../../assets/employee-photos/employee2.jpg","firstName": "Bob", "lastName": "Krasinski", "description": "I like trains" },
    { "image": "../../../assets/employee-photos/employee3.jpg","firstName": "John", "lastName": "Billy", "description": "I like trains" },
  ];


  tripOffers: {image: string, tripDestination: string, tripDescription: string}[] = [
    { "image": "../../../assets/destionation-pictures/switzerland/switzerland1.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/destionation-pictures/switzerland/switzerland2.jpg","tripDestination": "Bob", "tripDescription": "Krasinski" },
    { "image": "../../../assets/destionation-pictures/switzerland/switzerland3.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/employee-photos/employee3.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/employee-photos/employee3.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/employee-photos/employee2.jpg","tripDestination": "Bob", "tripDescription": "Krasinski" },
    { "image": "../../../assets/employee-photos/employee2.jpg","tripDestination": "Bob", "tripDescription": "Krasinski" },
    { "image": "../../../assets/employee-photos/employee3.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/employee-photos/employee3.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/employee-photos/employee3.jpg","tripDestination": "John", "tripDescription": "Billy" },
    { "image": "../../../assets/employee-photos/employee2.jpg","tripDestination": "Bob", "tripDescription": "Krasinski" },
  ]

  displayedTripOffers: {image: string, tripDestination: string, tripDescription: string}[] = []

}
