import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fences-decks',
  templateUrl: './fences-decks.component.html',
  styleUrls: ['./fences-decks.component.scss']
})
export class FencesDecksComponent implements OnInit {

  constructor() { }

  title = "MAJESTIC FENCE & DECK SERVICES";

  ngOnInit(): void {
  }

  paragraphs = [
    {
      text: '<p class="paragraph">\
        Majestic Construction & Landscaping excels at designing and building fences,\
        decks, pergolas, gazebos, and other custom outdoor structures. Whether you\
        have a vague notion, clear vision, or detailed design, we can build just what\
        you want.\
      </p>'
    },
    {
      text: '<p class="paragraph">\
      With over 20 years of experience, we know every material and brand\
      intimately—its durability, price, and value—and can match it to your needs\
      and budget. Your satisfaction is guaranteed: Majestic offers a 5-year\
      warranty on fence and deck work. Drop us a line! We look forward to\
      working with you.\
    </p>'
    }
  ];

  images = [
    {
      src: "assets/fence-deck/fd1.jpg"
    },
    {
      src: "assets/fence-deck/fd2.jpg"
    },
    {
      src: "assets/fence-deck/fd3.jpg"
    },
    {
      src: "assets/fence-deck/fd4.jpg"
    },
    {
      src: "assets/fence-deck/fd5.jpg"
    },
    {
      src: "assets/fence-deck/fd6.jpg"
    },
    {
      src: "assets/fence-deck/fd7.jpg"
    },
    {
      src: "assets/fence-deck/fd8.jpg"
    },
    {
      src: "assets/fence-deck/fd9.jpg"
    },
    {
      src: "assets/fence-deck/fd10.jpg"
    },
    {
      src: "assets/fence-deck/fd11.jpg"
    },
    {
      src: "assets/fence-deck/fd12.jpg"
    },
    {
      src: "assets/fence-deck/fd13.jpg"
    },
    {
      src: "assets/fence-deck/fd14.jpg"
    },
    {
      src: "assets/fence-deck/fd15.jpg"
    },
    {
      src: "assets/fence-deck/fd16.jpg"
    },
    {
      src: "assets/fence-deck/fd17.jpg"
    },
    {
      src: "assets/fence-deck/fd18.jpg"
    },
    {
      src: "assets/fence-deck/fd19.jpg"
    },
    {
      src: "assets/fence-deck/fd20.jpg"
    },
    {
      src: "assets/fence-deck/fd21.jpg"
    },
  ]

}
