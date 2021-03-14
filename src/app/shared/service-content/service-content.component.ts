import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss']
})
export class ServiceContentComponent implements OnInit {
  
  @Input() title: string | undefined;
  @Input() paragraphs: any;

  constructor() { }

  ngOnInit(): void {
  }

}
