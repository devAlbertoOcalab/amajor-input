import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amajor-input';

  inputArray: number[] = [];

  // !!!!!!!!!!!!!!! se uso l'array "pin" tipizzato in questa maniera non riesco ad utilizzare la funzione includes a riga 41!!!!!!!!!!!!!!!!!!!!
  // pin: number[] | null[] = [null, null, null, null, null, null, null, null];
  pin: any = [null, null, null, null, null, null, null, null];

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault();

    // controllo che input sia un numero o che l'array non superi la lunghezza prestabilita
    if (Number.parseInt(event.key, 10) && this.inputArray.length < this.pin.length) {
      this.inputArray.push(Number.parseInt(event.key, 10));
    }
    // se si preme backspace toglie ad inputArray l'ultimo valore e resetta in null il valore inserito in precedenzq
    else if (event.key === 'Backspace') {
      this.inputArray.pop();
      this.pin[this.inputArray.length] = null;
    }

    // aggiungo alla sua posizione il valore inserito
    if (this.inputArray.length > 0) {
      this.inputArray.forEach((input: number, index: number) => {
        this.pin[index] = input;
      });
    }
  }

  ableButton() {
    // se include ancora dei null all'interno dell'array il bottone rimane disabilitato
    return this.pin.includes(null);
  }
}
