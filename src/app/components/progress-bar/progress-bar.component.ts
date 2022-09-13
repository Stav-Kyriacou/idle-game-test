import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  timeLeft: number = 0;
  interval: any;
  timerStarted: boolean;
  @Input() duration: number;
  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    if (this.timerStarted) return;

    this.interval = setInterval(() => {
      this.timerStarted = true;
      if (this.timeLeft < this.duration * 100) {
        this.timeLeft++;
      } else {
        this.complete.emit();
        this.timeLeft = 0;
      }
    }, 10)
  }
  stopTimer() {
    clearInterval(this.interval);
    this.timeLeft = 0;
    this.timerStarted = false;
  }
}
