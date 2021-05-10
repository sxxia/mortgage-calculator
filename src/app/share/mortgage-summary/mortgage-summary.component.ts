import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.scss'],
})
export class MortgageSummaryComponent implements OnInit {
  @Input() results: any;
  @Input() frequency: number;

  constructor() {}

  ngOnInit(): void {}
}
