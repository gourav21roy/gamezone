import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openlink(link: string): void{
    if("insta" == link){
      window.open("https://www.instagram.com/gourav21roy", "_blank");
    }
    if("fb" == link){
      window.open("https://www.facebook.com/gourav21roy", "_blank");
    }
    if("linkedin" == link){
      window.open("https://www.linkedin.com/in/gourav21roy/", "_blank");
    }
    if("github" == link){
      window.open("https://github.com/gourav21roy", "_blank");
    }
  }

}
