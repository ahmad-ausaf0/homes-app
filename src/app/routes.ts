import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routeConfig: Routes = [
    { path: '', component: HomeComponent, title: 'Home Page'},
    { path: 'details/:id', component: DetailsComponent, title: 'Details Page'},
    { path: '**', component: PageNotFoundComponent, title: 'Page Not Found!'},

];

export default routeConfig;