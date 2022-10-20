import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio2';
  public screenWidth!: number;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
}
