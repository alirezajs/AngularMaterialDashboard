import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-dashboard',
  templateUrl: './simple-dashboard.component.html',
  styleUrls: ['./simple-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
