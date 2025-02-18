import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Space } from '../../models/property.model';

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-card">
      <button class="collapsible" (click)="toggleSpace()">
        {{ space.spaceName }}
      </button>
      <div [class.hidden]="!isExpanded" class="content">
        <table class="rent-roll-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Rent</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let rent of space.rentRoll">
              <td>{{ rent.month }}</td>
              <td>{{ rent.rent }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class SpaceComponent {
  @Input() space!: Space;
  isExpanded = false;

  toggleSpace() {
    this.isExpanded = !this.isExpanded;
  }
}