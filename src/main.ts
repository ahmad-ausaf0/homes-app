import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { HttpClient } from '@angular/common/http';
import { HousingService } from './app/housing.service';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
    // provideRouter(routeConfig), HousingService, importProvidersFrom(HttpClient)
  ]
}).catch(err => console.error(err));
