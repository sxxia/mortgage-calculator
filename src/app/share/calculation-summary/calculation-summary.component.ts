import { Component, Input, OnInit } from '@angular/core';

import { Results } from 'src/app/entities';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.scss'],
})
export class CalculationSummaryComponent implements OnInit {
  @Input() results: Results;

  constructor() {}

  ngOnInit(): void {}
}
