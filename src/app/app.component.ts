import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <main>
      <header>
        <a routerLink='/'><img class="brand-name" src="/assets/logo.svg" 
        alt="logo" aria-hidden="true"></a>
      </header>
    </main>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    `,
    styleUrls: ['./app.component.css'],
    imports: [HomeComponent, RouterModule, FormsModule, HttpClientModule]
})
export class AppComponent {
  title = 'homes';
}
