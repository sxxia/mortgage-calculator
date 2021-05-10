import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.scss'],
})
export class CalculationSummaryComponent implements OnInit {
  @Input() results: any;

  constructor() {}

  ngOnInit(): void {}
}
