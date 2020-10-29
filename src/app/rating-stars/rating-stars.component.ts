import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {
  @Input()
  rate: number;

  @Output()
  rateChange: EventEmitter<number> = new EventEmitter<number>();

  isRated: boolean[] = [false, false, false, false, false];

  constructor() { 
  }

  ngOnInit(): void {
    for (let i = 0; i < this.rate; i++) {
      this.isRated[i] = true;
    }
  }

  rateHandler(rateNumber: number) {
    for (let i = 0; i <= rateNumber; i++) {
      this.isRated[i] = true;
    }
    for (let i = rateNumber+1; i < this.isRated.length; i++) {
      this.isRated[i] = false;
    }

    this.rateChange.emit(rateNumber+1);
  }

  pintar() {
    console.log('pintado');
    
  }
}
