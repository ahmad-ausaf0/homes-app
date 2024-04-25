import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" 
      alt="Exterior photo of {{housingLocation.photo}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">
      {{housingLocation.city}}, {{housingLocation.state}}
      </p>
      <a [routerLink]="['details', housingLocation.id]">Learn More</a>
      <!-- <button class="btn btn-danger" type="button" (click)="deletePost(post, id)">Delete</button> -->
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/locations';
  // deletePost(id: number) {
  //   this.http.delete(this.url).subscribe(res => {
  //     this.posts = this.posts.filter(item => item.id !== id);
  //     alert("Delete Successfully !!!")
  //   })
  // }

//   this.http.post('http://localhost:3000/posts', formData).subscribe(
//         response => {
//           // Handle the response here
//           console.log('Form data posted successfully:', response);
//         },
//         error => {
//           // Handle any errors that occur during the HTTP request
//           console.error('Error posting form data:', error);
//         }
//       );
      
}
