import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'concrete',
  templateUrl: './concrete.component.html',
  styleUrls: ['./concrete.component.scss']
})
export class ConcreteComponent implements OnInit {

  title = "Majestic Concrete Work";

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
      We offer a one-year guarantee on all concrete projects. <a href="tel:1-801-759-4477">Give us a call</a> today\
      to discuss what you want!\
    </p>'
    }
  ];

  images = [
    {
      src: "assets/concrete/concrete1.jpg"
    },
    {
      src: "assets/concrete/concrete2.jpg"
    },
    {
      src: "assets/concrete/concrete3.jpg"
    },
    {
      src: "assets/concrete/concrete4.jpg"
    },
    {
      src: "assets/concrete/concrete5.jpg"
    },
    {
      src: "assets/concrete/concrete6.jpg"
    },
    {
      src: "assets/concrete/concrete7.jpg"
    },
    {
      src: "assets/concrete/concrete8.jpg"
    },
    {
      src: "assets/concrete/concrete9.jpg"
    },
    {
      src: "assets/concrete/concrete10.png"
    },
    {
      src: "assets/concrete/concrete11.jpg"
    },
    {
      src: "assets/concrete/concrete12.jpg"
    },
    {
      src: "assets/concrete/concrete13.jpg"
    },
    {
      src: "assets/concrete/concrete14.jpg"
    },
    {
      src: "assets/concrete/concrete15.jpg"
    },
    {
      src: "assets/concrete/concrete16.jpg"
    },
    {
      src: "assets/concrete/concrete17.jpg"
    },
    {
      src: "assets/concrete/concrete18.jpg"
    },
    {
      src: "assets/concrete/concrete19.jpg"
    },
    {
      src: "assets/concrete/concrete20.jpg"
    },
  ];

  ngOnInit(): void {
  }

}
