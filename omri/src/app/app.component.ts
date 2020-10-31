import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'omri';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(event): void {
    //   throw new Error('Method not implemented.');
    console.log(event);

  }



}
