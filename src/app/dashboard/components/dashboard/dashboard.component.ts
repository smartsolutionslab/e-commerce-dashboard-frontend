import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardData, KpiMetric } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="p-6 space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div class="flex space-x-2">
          <select class="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Today</option>
          </select>
        </div>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <app-kpi-widget
          *ngFor="let kpi of kpiMetrics$ | async"
          [title]="kpi.title"
          [value]="kpi.value"
          [change]="kpi.change"
          [trend]="kpi.trend"
          [icon]="kpi.icon">
        </app-kpi-widget>
      </div>

      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Revenue Chart -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h2>
          <app-revenue-chart></app-revenue-chart>
        </div>

        <!-- Sales Overview -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h2>
          <app-sales-overview></app-sales-overview>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Order Statistics -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Order Statistics</h2>
          <app-order-stats></app-order-stats>
        </div>

        <!-- Customer Metrics -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Customer Metrics</h2>
          <app-customer-metrics></app-customer-metrics>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  dashboardData$: Observable<DashboardData>;
  kpiMetrics$: Observable<KpiMetric[]>;

  constructor(private dashboardService: DashboardService) {
    this.dashboardData$ = this.dashboardService.getDashboardData();
    this.kpiMetrics$ = this.dashboardService.getKpiMetrics();
  }

  ngOnInit(): void {
    // Data will be loaded through observables
  }
}
