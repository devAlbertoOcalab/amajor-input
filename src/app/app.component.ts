import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amajor-input';

  pin: number[] = [];

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault();

    if (Number.parseInt(event.key, 10) && this.pin.length < 8) {
      this.pin.push(Number.parseInt(event.key, 10));
    }
    else if (event.key === 'Backspace') {
      this.pin.pop();
    }

  }

  ableButton() {
    return this.pin.length !== 8;
  }
}
