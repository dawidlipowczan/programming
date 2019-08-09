import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'translator';
  click = 'klik';
  click1 = 'klik';
  click2 = 'klik';
  click3 = 'klik';
  click4 = 'klik';
  click5 = 'klik';
  click6 = 'klik';
  click7 = 'klik';
  click8 = 'klik';
  click9 = 'klik';
  definitely;
  test;


pictures = ['A' , 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
numbers = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
numbersRandom = [];
shuffleArray;
finder = null;
finder1 = 0;
helper = 0;
timeCounter = 0;
cc = 0;
array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
one = null;
two = null;


mix() {
    let j;
    let x, i;
   for (i = this.numbers.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
       x = this.numbers[i];
      this.numbers[i] = this.numbers[j];
        this.numbers[j] = x;
    }
    this.numbersRandom = this.numbers;
    console.log(this.numbersRandom);
    this.helper = this.helper + 1;
   return this.numbers;
 }

 showLetter() {
   if (this.helper === 0) {
alert('click "mix" button');
   }
   // tslint:disable-next-line:one-line
   else {
while (this.finder !== 0) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
}
this.click = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
this.array[0] = 1;
if (this.timeCounter === 2) {
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter1() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 1) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[1] = 1;
}
this.click1 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter2() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 2) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[2] = 1;
}
this.click2 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter3() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 3) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[3] = 1;
}
this.click3 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter4() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 4) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[4] = 1;
}
this.click4 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter5() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 5) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[5] = 1;
}
this.click5 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter6() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 6) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[6] = 1;
}
this.click6 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter7() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 7) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[7] = 1;
}
this.click7 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter8() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 8) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[8] = 1;
}
this.click8 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}

showLetter9() {
  if (this.helper === 0) {
alert('click "mix" button');
  }
  // tslint:disable-next-line:one-line
  else {
while (this.finder !== 9) {
this.finder = this.numbersRandom[this.finder1];
this.finder1 = this.finder1 + 1;
this.array[9] = 1;
}
this.click9 = this.pictures[this.finder1];
this.finder1 = 0;
this.timeCounter = this.timeCounter + 1;
if (this.timeCounter === 2) {
  this.check1();
  this.check2();
  setTimeout(() => this.te(), 1500);
  this.timeCounter = 0;
}
}
}
te() {
  // tslint:disable-next-line:max-line-length
  if (this.click !== 'klik' && this.click1 !== 'klik' && this.click2 !== 'klik' && this.click3 !== 'klik' && this.click4 !== 'klik' && this.click5 !== 'klik' && this.click6 !== 'klik' && this.click7 !== 'klik' && this.click8 !== 'klik' && this.click9 !== 'klik' ) {
    alert('gratuluje wygrałeś');
  }
  if (this.one === this.two) {
    this.one = 'dobrze';
    alert(this.one);
    }
    // if (this.two === this.one) {
    //   this.two = 'dobrze';
    //   alert(this.two);
    //   }
       else {
      if (this.click !== 'klik' && this.one !== this.click || this.two !== this.click) {
        this.click = 'klik';
      }
      if (this.click1 !== 'klik' && this.one !== this.click1 || this.two !== this.click1) {
       this.click1 = 'klik';
     }
      if (this.click2 !== 'klik' && this.one !== this.click2 || this.two !== this.click2) {
        this.click2 = 'klik';
     }
      if (this.click3 !== 'klik' && this.one !== this.click3 || this.two !== this.click3) {
        this.click3 = 'klik';
     }
      if (this.click4 !== 'klik' && this.one !== this.click4 || this.two !== this.click4) {
        this.click4 = 'klik';
      }
      if (this.click5 !== 'klik' && this.one !== this.click5 || this.two !== this.click5) {
        this.click5 = 'klik';
      }
      if (this.click6 !== 'klik' && this.one !== this.click6 || this.two !== this.click6) {
        this.click6 = 'klik';
      }
      if (this.click7 !== 'klik' && this.one !== this.click7 || this.two !== this.click7) {
        this.click7 = 'klik';
      }
     if (this.click8 !== 'klik' && this.one !== this.click8 || this.two !== this.click8) {
        this.click8 = 'klik';
      }
      if (this.click9 !== 'klik' && this.one !== this.click9 || this.two !== this.click9) {
        this.click9 = 'klik';
     }
    }


}
check1() {
  if (this.array[0] === 1) {
    this.one = this.click;
    this.check2();
    this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[1] === 1) {
      this.one = this.click1;
    this.check2();
    this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[2] === 1) {
      this.one = this.click2;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[3] === 1) {
      this.one = this.click3;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[4] === 1) {
      this.one = this.click4;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[5] === 1) {
      this.one = this.click5;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[6] === 1) {
      this.one = this.click6;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[7] === 1) {
      this.one = this.click7;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[8] === 1) {
      this.one = this.click8;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[9] === 1) {
      this.one = this.click9;
      this.check2();
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
}

check2() {
  if (this.array[9] === 1) {
    this.two = this.click9;
    this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[8] === 1) {
      this.two = this.click8;
    this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[7] === 1) {
      this.two = this.click7;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[6] === 1) {
      this.two = this.click6;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[5] === 1) {
      this.two = this.click5;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[4] === 1) {
      this.two = this.click4;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[3] === 1) {
      this.two = this.click3;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[2] === 1) {
      this.two = this.click2;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[1] === 1) {
      this.two = this.click1;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else
    if (this.array[0] === 1) {
      this.two = this.click;
      this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
}

}
