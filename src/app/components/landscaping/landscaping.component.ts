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
      src: "assets/Concrete/one-concrete.jpg"
    },
    {
      src: "assets/Concrete/two-concrete.jpg"
    },
    {
      src: "assets/Concrete/three-concrete.jpg"
    },
    {
      src: "assets/Concrete/four-concrete.jpg"
    },
    {
      src: "assets/Concrete/five-concrete.jpg"
    },
    {
      src: "assets/Concrete/six-concrete.jpg"
    },
  ]
}
