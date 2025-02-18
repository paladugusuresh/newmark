import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { PropertyListComponent } from './app/components/property-list/property-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PropertyListComponent],
  template: `
    <app-property-list></app-property-list>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));