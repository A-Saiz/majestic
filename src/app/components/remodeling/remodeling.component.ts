import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'remodeling',
  templateUrl: './remodeling.component.html',
  styleUrls: ['./remodeling.component.scss']
})
export class RemodelingComponent implements OnInit {

  constructor() { }

  title = "HOME & COMMERCIAL REMODELING SERVICES";

  ngOnInit(): void {
  }

  paragraphs = [
    {
      text: '<p class="paragraph">\
      Whatever you need done to your home or business, Majestic Construction\
      & Landscaping has got you covered. From sprucing up a single room to building\
      a spacious addition, we can execute any job big or small. Tile and flooring,\
      painting, light and electrical, plumbing, drywall, framing—you name it,\
      we do it! Email or call us today for a quote. We look forward to working with you!\
    </p>'
    }
  ];

}
