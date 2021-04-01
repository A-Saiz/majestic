import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

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
      text: '<p class="paragraph">\
        Majestic Construction & Landscaping can complete any residential or commercial\
        landscaping project to your exact specifications. We are punctual, honest, and\
        fast—but not at the expense of detail! We listen carefully\
        to understand what you want, and won’t quit until you have it.\
      </p>'
    },
    {
      text: '<p class="paragraph">\
      Majestic owns all of its own equipment, and does not rent. We boast a team\
      of skilled, professional landscapers dedicated to delivering the precise\
      outcome you desire. Shoot Pedro an email today to talk about your next project!\
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
}
