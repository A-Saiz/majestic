import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprinkler',
  templateUrl: './sprinkler.component.html',
  styleUrls: ['./sprinkler.component.scss']
})
export class SprinklerComponent implements OnInit {

  constructor() { }

  title = "MAJESTIC SPRINKLER SERVICES"

  ngOnInit(): void {
  }

  paragraphs = [
    {
      text: '<p class="paragraph">\
      Majestic Construction & Landscaping has decades of experience designing,\
      installing, and repairing sprinkler systems. We know every sprinkler brand\
      and part—its quality, functionality, and price—which allows us to match just\
      the right system to your needs.\
      </p>'
    },
    {
      text: '<p class="paragraph">\
      Majestic owns all of the equipment needed to dig trenches and lay pipes\
      quickly and efficiently. We offer a 10-year warranty on sprinkler parts,\
      and a lifetime guarantee on valves. Call us today, and we’ll get ’er done!\
      </p>'
    }
  ]

}
