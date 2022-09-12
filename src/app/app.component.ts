import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  wood: number = 0;
  timeLeft: number = 0;
  interval;
  timerStarted: boolean;

  startTimer() {
    if (this.timerStarted) return;


    this.interval = setInterval(() => {
      this.timerStarted = true;
      if (this.timeLeft < 100) {
        this.timeLeft++;
      } else {
        this.timeLeft = 0;
        this.gatherWood();
      }
    }, 10)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.timerStarted = false;
  }
  gatherWood() {
    this.wood++;
  }


}
