import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landscaping',
  templateUrl: './landscaping.component.html',
  styleUrls: ['./landscaping.component.scss']
})
export class LandscapingComponent implements OnInit {

  constructor() { }

  title = "MAJESTIC LANDSCAPING SERVICES"

  ngOnInit(): void {
  }

  paragraphs = [
    {
      text: 'Here is a place holder'
    },
    {
      text: 'Here is a place holder'
    },
    {
      text: 'Here is a place holder'
    },
    {
      text: 'Here is a place holder'
    },
  ];

}
