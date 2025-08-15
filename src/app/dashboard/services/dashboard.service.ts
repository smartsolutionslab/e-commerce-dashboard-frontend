import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DashboardData, KpiMetric } from '../models/dashboard.model';

@Injectable()
export class DashboardService {
  private readonly baseUrl = '/api/v1';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    // TODO: Replace with actual API call
    return of({
      totalRevenue: 145600,
      totalOrders: 1256,
      totalCustomers: 890,
      averageOrderValue: 115.85,
      revenueChart: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue',
          data: [12000, 15000, 13000, 18000, 16000, 20000],
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 2
        }]
      },
      salesByCategory: [
        { categoryName: 'Electronics', sales: 45000, percentage: 31 },
        { categoryName: 'Clothing', sales: 35000, percentage: 24 },
        { categoryName: 'Books', sales: 25000, percentage: 17 },
        { categoryName: 'Home & Garden', sales: 40000, percentage: 28 }
      ],
      orderStatistics: {
        pending: 45,
        confirmed: 123,
        shipped: 89,
        delivered: 567,
        cancelled: 12
      },
      customerMetrics: {
        newCustomers: 156,
        returningCustomers: 734,
        customerRetentionRate: 82.5,
        averageCustomerLifetimeValue: 1250.00
      }
    });
  }

  getKpiMetrics(): Observable<KpiMetric[]> {
    return of([
      {
        title: 'Total Revenue',
        value: '$145,600',
        change: 12.5,
        trend: 'up',
        icon: 'fas fa-dollar-sign'
      },
      {
        title: 'Total Orders',
        value: '1,256',
        change: 8.2,
        trend: 'up',
        icon: 'fas fa-shopping-cart'
      },
      {
        title: 'Total Customers',
        value: '890',
        change: 15.3,
        trend: 'up',
        icon: 'fas fa-users'
      },
      {
        title: 'Avg Order Value',
        value: '$115.85',
        change: -2.1,
        trend: 'down',
        icon: 'fas fa-chart-line'
      }
    ]);
  }
}
