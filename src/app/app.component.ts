import { Component, ViewChild } from '@angular/core';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { Data } from './models/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Data;

  @ViewChild(ProgressBarComponent) progressBar: ProgressBarComponent; 

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("save"));
  }

  startTimer() {
    this.progressBar.startTimer();
  }

  stopTimer() {
    this.progressBar.stopTimer();
  }

  mineGold() {
    this.data.gold++;
    this.save();
  }

  save() {
    localStorage.setItem("save", JSON.stringify(this.data));
  }

  resetSave() {
    this.data = { level: 1, gold: 0, class: "empty" };
    this.save();
  }

}