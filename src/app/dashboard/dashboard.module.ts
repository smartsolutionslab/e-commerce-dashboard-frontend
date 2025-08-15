import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesOverviewComponent } from './components/sales-overview/sales-overview.component';
import { OrderStatsComponent } from './components/order-stats/order-stats.component';
import { CustomerMetricsComponent } from './components/customer-metrics/customer-metrics.component';
import { RevenueChartComponent } from './components/revenue-chart/revenue-chart.component';
import { KpiWidgetComponent } from './components/kpi-widget/kpi-widget.component';
import { DashboardService } from './services/dashboard.service';

const routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    SalesOverviewComponent,
    OrderStatsComponent,
    CustomerMetricsComponent,
    RevenueChartComponent,
    KpiWidgetComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
