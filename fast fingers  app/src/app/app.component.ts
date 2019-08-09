import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel';
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z' ];
  lettersOnScreen: Array<string> = [];
  newTask = '';
  tablica: Array<string> = [];
  y = 1;
  x = 0;
  z = 0;
  startFrom = 0;
  score = '';
  badLetters = 0;
  goodLetters = 0;


  randomLetter() {
    for (let i = 1; i <= 50; i = i + 1 ) {
    const random: number = Math.floor( Math.random() * 25);
    this.lettersOnScreen.push(this.letters[random]);

    }
   // document.getElementById('button1').disabled = true;
     this.startFrom = new Date().getTime();
  }
  add() {
    if (this.newTask.length > 2 || this.newTask.length < 2) {
      this.newTask = '';
    }
    // tslint:disable-next-line:one-line
    else {
    this.tablica.push(this.newTask);
    this.newTask = '';
    this.checker();
    this.y = this.y - 1;
    this.x = this.x + 1;
    if (this.badLetters + this.goodLetters === 50) {
      this.timeCounter();
    }
    }
  }
  checker() {
  while (this.y < 2) {
    if ( ' ' + this.lettersOnScreen[this.x] === this.tablica[this.x]) {

            document.body.style.backgroundColor = '	#7FFFD4';
            this.y = this.y + 1;
            this.z = this.z + 100;
            this.goodLetters = this.goodLetters + 1;
         }
          // tslint:disable-next-line:one-line
          else {
            document.body.style.backgroundColor = '#F08080';
            this.y = this.y + 1;
            this.z = this.z + 100;
            this.badLetters = this.badLetters + 1;
  }
}
}
timeCounter() {

// tslint:disable-next-line:max-line-length
this.score = ('twój wynik to ' + (new Date().getTime() - this.startFrom) / 1000 + ' sekund' + '    ilość dobrych liter ' + this.goodLetters + '    ilość złych liter ' + this.badLetters);

}


}
