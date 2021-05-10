import { Component, Input, OnInit } from '@angular/core';

import { Results } from 'src/app/entities';

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.scss'],
})
export class MortgageSummaryComponent implements OnInit {
  @Input() results: Results;
  @Input() frequency: number;

  constructor() {}

  ngOnInit(): void {}
}
