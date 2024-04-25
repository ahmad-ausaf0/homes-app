import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, HttpClientModule, RouterModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" (input)="filterResults($event)">
        <!-- <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button> -->
      </form>
    </section>
    <section class="results">
    <ng-container *ngIf="isDataLoaded; else loading">
      <ng-container *ngIf="filteredLocationList.length > 0; else noResults">
        <app-housing-location *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"></app-housing-location>
      </ng-container>
      <ng-template #noResults>
        <p>No results found.</p>
      </ng-template>
    </ng-container>
    <!-- <ng-template #loading>
        <p>Loading...</p>
    </ng-template> -->
    </section>
    <ng-template #loading>
      <div class="loading-container">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>
    </ng-template>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  isDataLoaded: boolean = false;

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationDataList: HousingLocation[]) => {
      this.housingLocationList = housingLocationDataList;
      this.filteredLocationList = this.housingLocationList;
      this.isDataLoaded = true;
    });

  }

  filterResults(event: Event) {
    const text = (event.target as HTMLInputElement).value;

    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
  }

  /* filterResults(text: string) {
    if (!text) 
      this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList  = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  } */
}
