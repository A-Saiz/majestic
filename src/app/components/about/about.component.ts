import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  title = "GET TO KNOW ME";

  ngOnInit(): void {
  }

  paragraphs = [
    {
      text: '<p class="paragraph">\
              <img class="avatar" src="assets\\logomajestic.ico" alt="alt text">\
              Pedro Albarran is the owner of Majestic Construction & Landscaping.\
              Born in Mexico, he came to the US in 1997 landing in California before\
              settling in majestic Utah.\
            </p>'
    },
    {
      text: '<p class="paragraph">\
              Pedro built his business from the ground up becoming expert in all\
              aspects of landscaping, construction, concrete, fence design and other\
              skills. Slowly but surely, and with a lot of hard work, Pedro assembled\
              a fleet of heavy machinery and equipment specialized for landscaping\
              and remodeling projects of every size, all the while recruiting and\
              grooming an army of the hardest working landscapers and assistants\
              in the state. Pedro loves what he does, and it shows in his meticulous\
              work. He demonstrates extreme pride and integrity in his craft—he won’t\
              stop until you’re 100% satisfied.</p>'
    },
    {
      text: '<p class="paragraph">\
              Pedro enjoys spending time with his wonderful family, and traveling\
              around our gorgeous state when he’s not knocking out his next project.\
            </p>'
    },
    {
      text: '<p class="paragraph">\
              Drop Majestic a line! We look forward to discussing your project.\
            </p>'
    }
  ];

}
