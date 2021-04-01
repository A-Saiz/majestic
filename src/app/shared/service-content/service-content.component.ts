import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss']
})
export class ServiceContentComponent implements OnInit {
  
  @Input() title: string | undefined;
  @Input() paragraphs: any;
  @Input() images: any;

  constructor() { }

  ngOnInit(): void {
  }

  showImage(src: any) {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("initial-image");
    const modalImage = document.getElementById("modalImage");
    if (modal && img && modalImage) {
      modal.style.display = "block";
      modalImage.setAttribute("src", src);
    }
  }

  closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

}
