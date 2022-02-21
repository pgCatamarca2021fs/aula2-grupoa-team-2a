/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataChartService } from './data-chart.service';

describe('Service: DataChart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataChartService]
    });
  });

  it('should ...', inject([DataChartService], (service: DataChartService) => {
    expect(service).toBeTruthy();
  }));
});
