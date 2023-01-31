import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  slides: any[] = new Array().fill({id: -1, src: '', title: '', route: '', desc: '', disabled: false});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/ttt.png',
      route: '/tictactoe',
      desc: 'Classic Tic-Tac-Toe',
      disabled: false
    };
    this.slides[1] = {
      src: './assets/coming-soon.png',
      route: '',
      desc: 'More games coming soon',
      disabled: true
    }
    // this.slides[2] = {
    //   src: './assets/coming-soon.png',
    //   route: '',
    //   desc: 'More games coming soon',
    //   disabled: true
    // }
    // this.slides[3] = {
    //   src: './assets/coming-soon.png',
    //   route: '',
    //   desc: 'More games coming soon',
    //   disabled: true
    // }
    // this.slides[4] = {
    //   src: './assets/coming-soon.png',
    //   route: '',
    //   desc: 'More games coming soon',
    //   disabled: true
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
