export interface DashboardData {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  averageOrderValue: number;
  revenueChart: ChartData;
  salesByCategory: CategorySales[];
  orderStatistics: OrderStatistics;
  customerMetrics: CustomerMetrics;
}

export interface KpiMetric {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}

export interface CategorySales {
  categoryName: string;
  sales: number;
  percentage: number;
}

export interface OrderStatistics {
  pending: number;
  confirmed: number;
  shipped: number;
  delivered: number;
  cancelled: number;
}

export interface CustomerMetrics {
  newCustomers: number;
  returningCustomers: number;
  customerRetentionRate: number;
  averageCustomerLifetimeValue: number;
}
