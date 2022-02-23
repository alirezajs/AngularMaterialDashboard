import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
