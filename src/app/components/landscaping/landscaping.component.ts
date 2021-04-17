import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'landscaping',
  templateUrl: './landscaping.component.html',
  styleUrls: ['./landscaping.component.scss']
})
export class LandscapingComponent implements OnInit {

  constructor() { }

  title = "Majestic Landscaping"

  ngOnInit(): void {
  }

  paragraphs = [
    {
      text: '<p class="paragraph">Majestic Construction & Landscaping can complete any residential\
      or commercial landscaping project to your exact specifications. We are punctual, honest,\
      and fast—but not at the expense of detail! We listen carefully to understand precisely\
      what you want, and won’t quit until you have it.\
      </p>'
    },
    {
      text: '<p class="paragraph">Majestic owns all of its own equipment, and does not rent\
      which reduces costs and delays. We are skilled in all aspects of landscape design\
      including rock, stone, and brickwork; fountains and ponds; fire pit installation and\
      more. <a href="tel:1-801-759-4477">Call</a> or email Pedro today to discuss your next project!\
    </p>'
    }
  ];

  images = [
    {
      src: "assets/landscaping/landscape1.jpg"
    },
    {
      src: "assets/landscaping/landscape2.jpg"
    },
    {
      src: "assets/landscaping/landscape3.jpg"
    },
    {
      src: "assets/landscaping/landscape4.jpg"
    },
    {
      src: "assets/landscaping/landscape5.jpg"
    },
    {
      src: "assets/landscaping/landscape6.jpg"
    },
    {
      src: "assets/landscaping/landscape7.jpg"
    },
    {
      src: "assets/landscaping/landscape8.jpg"
    },
    {
      src: "assets/landscaping/landscape9.jpg"
    },
    {
      src: "assets/landscaping/landscape10.jpg"
    },
    {
      src: "assets/landscaping/landscape11.jpg"
    },
    {
      src: "assets/landscaping/landscape12.jpg"
    },
    {
      src: "assets/landscaping/landscape13.jpg"
    },
    {
      src: "assets/landscaping/landscape14.jpg"
    },
    {
      src: "assets/landscaping/landscape15.jpg"
    },
    {
      src: "assets/landscaping/landscape16.jpg"
    },
    {
      src: "assets/landscaping/landscape17.jpg"
    },
    {
      src: "assets/landscaping/landscape18.png"
    },
    {
      src: "assets/landscaping/landscape19.png"
    },
    {
      src: "assets/landscaping/landscape20.png"
    },
    {
      src: "assets/landscaping/landscape21.png"
    },
    {
      src: "assets/landscaping/landscape22.jpg"
    },
    {
      src: "assets/landscaping/landscape23.jpg"
    },
    {
      src: "assets/landscaping/landscape24.jpg"
    },
    {
      src: "assets/landscaping/landscape25.jpg"
    },
    {
      src: "assets/landscaping/landscape26.jpg"
    },
  ];
}
