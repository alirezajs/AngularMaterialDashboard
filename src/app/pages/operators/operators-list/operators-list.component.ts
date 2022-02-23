import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
