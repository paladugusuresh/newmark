import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';
import { PropertyComponent } from '../property/property.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, PropertyComponent],
  template: `
    <div class="property-list">
      <h1>Properties</h1>
      <app-property
        *ngFor="let property of properties"
        [property]="property"
      ></app-property>
    </div>
  `
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.getProperties().subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }
}