import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  public isCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {

    this.isCollapsed = true;
  }

}
