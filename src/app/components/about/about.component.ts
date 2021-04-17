import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  title = "About Majestic and Owner Pedro";

  ngOnInit(): void {
  }

  paragraphs = [
    {
      text: '<div><img class="about-hero" src="assets\\team\\collage.png"></div>\
              <p class="paragraph">\
              <img class="avatar" src="assets\\pedro.jpg" alt="pedro">\
              Pedro Albarran is the owner of Majestic Construction & Landscaping.\
              He came to the U.S. from Mexico in 1997 evenntually settling in\
              majestic Utah.\
              <br>\
              <p class="paragraph">Pedro built his business from the ground up becoming expert\
              in all aspects of landscaping, construction, pouring concrete, fence design, and\
              other skills. With years of hard work, he acquired a fleet of heavy machinery and\
              equipment specialized for landscaping and construction, all the while recruiting\
              and grooming an army of the hardest workers in the business.</p>\
              <p class="paragraph">Pedro loves what he does, and it shows in his\
              meticulous work. He demonstrates extreme pride and integrity in his craft, and\
              won’t stop until you’re 100% satisfied.\
            </p>\
            <p class="paragraph">\
              Drop Majestic a <a href="tel:1-801-759-4477">line</a> We look forward to discussing your project.😀\
            </p>\
            </p>'
    }
  ];

}
