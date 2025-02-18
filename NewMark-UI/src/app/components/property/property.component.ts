import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Property } from '../../models/property.model';
import { SpaceComponent } from '../space/space.component';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule, SpaceComponent],
  template: `
    <div class="property-card">
      <button class="collapsible" (click)="toggleProperty()">
        {{ property.propertyName }}
      </button>
      <div [class.hidden]="!isPropertyExpanded" class="content">
        <div>
          <button class="collapsible" (click)="toggleFeatures()">Features</button>
          <ul [class.hidden]="!isFeaturesExpanded" class="feature-list">
            <li *ngFor="let feature of property.features">{{ feature }}</li>
          </ul>
        </div>

        <div>
          <button class="collapsible" (click)="toggleHighlights()">Highlights</button>
          <ul [class.hidden]="!isHighlightsExpanded" class="highlight-list">
            <li *ngFor="let highlight of property.highlights">{{ highlight }}</li>
          </ul>
        </div>

        <div>
          <button class="collapsible" (click)="toggleTransportation()">Transportation</button>
          <ul [class.hidden]="!isTransportationExpanded" class="transportation-list">
            <li *ngFor="let transport of property.transportation">
              {{ transport.type }} - {{ transport.line }} ({{ transport.distance }})
              <span *ngIf="transport.station">, Station: {{ transport.station }}</span>
            </li>
          </ul>
        </div>

        <div>
          <button class="collapsible" (click)="toggleSpaces()">Spaces</button>
          <div [class.hidden]="!isSpacesExpanded">
            <app-space
              *ngFor="let space of property.spaces"
              [space]="space"
            ></app-space>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PropertyComponent {
  @Input() property!: Property;
  
  isPropertyExpanded = false;
  isFeaturesExpanded = false;
  isHighlightsExpanded = false;
  isTransportationExpanded = false;
  isSpacesExpanded = false;

  toggleProperty() {
    this.isPropertyExpanded = !this.isPropertyExpanded;
  }

  toggleFeatures() {
    this.isFeaturesExpanded = !this.isFeaturesExpanded;
  }

  toggleHighlights() {
    this.isHighlightsExpanded = !this.isHighlightsExpanded;
  }

  toggleTransportation() {
    this.isTransportationExpanded = !this.isTransportationExpanded;
  }

  toggleSpaces() {
    this.isSpacesExpanded = !this.isSpacesExpanded;
  }
}