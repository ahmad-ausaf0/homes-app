import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Page Not Found</h2>
    <p>We couldn't find that page! Not even with x-ray vision.</p>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

}
