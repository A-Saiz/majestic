import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output()
  public sidenavToggle = new EventEmitter();

  title = 'Majestic Construction';

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
