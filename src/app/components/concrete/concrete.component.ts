import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'concrete',
  templateUrl: './concrete.component.html',
  styleUrls: ['./concrete.component.scss']
})
export class ConcreteComponent implements OnInit {

  title = "MAJESTIC CONCRETE SERVICES";

  constructor() { }

  paragraphs = [
    {
      text: '<p class="paragraph">\
      Pouring concrete driveways, walkways, patios, and garages is one of Majestic\
      Construction & Landscaping’s primary services. We can execute as basic or as\
      ornate work as you need including:\
    </p>'
    },
    {
      text: '<ul>\
      <li>pavers & brick patios</li>\
      <li>retaining walls</li>\
      <li>stamped, stained & polished designs</li>\
      <li>outdoor living spaces</li>\
      <li>and whatever you need</li>\
      </ul>'
    },
    {
      text: '<p class="paragraph">\
      We offer a one-year guarantee on all concrete projects. Give us a call today\
      to discuss what you want!\
    </p>'
    }
  ];

  images = [
    {
      src: 'assets\\Concrete\\one-concrete.jpg'
    },
    {
      src: 'assets\\Concrete\\two-concrete.jpg'
    },
    {
      src: 'assets\\Concrete\\three-concrete.jpg'
    },
    {
      src: 'assets\\Concrete\\four-concrete.jpg'
    },
    {
      src: 'assets\\Concrete\\five-concrete.jpg'
    },
    {
      src: 'assets\\Concrete\\six-concrete.jpg'
    },
  ]

  ngOnInit(): void {
  }

}
