import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', route: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/ttt.png',
      route: '/maintenance'
    };
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

}
