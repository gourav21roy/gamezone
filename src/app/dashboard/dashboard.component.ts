import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', route: '', disabled: false});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/ttt.png',
      route: '/maintenance',
      disabled: true
    };
    this.slides[1] = {
      src: './assets/coming-soon.png',
      route: '',
      disabled: true
    }
    // this.slides[1] = {
    //   src: './assets/ttt.png',
    // }
    // this.slides[2] = {
    //   src: './assets/tictac.png',
    // }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  gotoTile(tile: any){
    console.log(tile.src);
  }

  isDisabled(slide: any){
    return slide.disabled;
  }

}
