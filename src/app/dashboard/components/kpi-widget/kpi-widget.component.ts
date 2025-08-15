import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-widget',
  template: `
    <div class="bg-white rounded-lg shadow p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-600">{{ title }}</p>
          <p class="text-2xl font-bold text-gray-900">{{ value }}</p>
        </div>
        <div class="p-3 rounded-full" [class]="iconBackgroundClass">
          <i [class]="icon + ' text-xl'"></i>
        </div>
      </div>
      <div class="mt-4 flex items-center">
        <div class="flex items-center" [class]="trendClass">
          <i [class]="trendIcon"></i>
          <span class="text-sm font-medium ml-1">
            {{ Math.abs(change) }}%
          </span>
        </div>
        <span class="text-sm text-gray-500 ml-2">vs last period</span>
      </div>
    </div>
  `
})
export class KpiWidgetComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() change: number = 0;
  @Input() trend: 'up' | 'down' | 'neutral' = 'neutral';
  @Input() icon: string = '';

  Math = Math;

  get trendClass(): string {
    switch (this.trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  }

  get trendIcon(): string {
    switch (this.trend) {
      case 'up':
        return 'fas fa-arrow-up';
      case 'down':
        return 'fas fa-arrow-down';
      default:
        return 'fas fa-minus';
    }
  }

  get iconBackgroundClass(): string {
    return 'bg-blue-100 text-blue-600';
  }
}
