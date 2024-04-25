import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApplyForm } from '../apply-form';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" 
        alt="Exterior photo of {{housingLocation?.photo}}">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">
        {{housingLocation?.city}}, {{housingLocation?.state}}
        </p>
      </section> 
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply Now to Live Here!</h2>
        <form [formGroup]="applyForm" (submit)="submitForm()" *ngIf="applyForm">
        <!-- <form #applyFormData = "ngForm" (ngSubmit)="submitFormData(applyFormData.value)"> -->


          <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" formControlName = "firstName" name="firstName">
            <span class="error-msg" *ngIf="applyForm.get('firstName')?.invalid && submitted">
              <span *ngIf="this.applyForm?.get('firstName')?.errors?.['required']">First name is required.
              </span>
            </span>  
          </div>

          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" formControlName = "lastName" name="lastName">
            <span class="error-msg" *ngIf="applyForm.get('lastName')?.invalid && submitted">
                <span *ngIf="this.applyForm?.get('lastName')?.errors?.['required']">Last name is required.
                </span>
            </span>  
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" formControlName = "email" name="email" email required>
            <span class="error-msg" *ngIf="applyForm?.get('email')?.invalid && submitted">
              <span *ngIf="applyForm?.get('email')?.errors?.['required']">Email is Required.</span>
              <span *ngIf="applyForm?.get('email')?.errors?.['email']">Email is invalid.</span>
            </span>
          </div>
          
          <button type="submit" class="primary pointer">Apply Now</button>
        </form>
       
      </section>
    </article> 
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  // housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  submitted: boolean = false;
  formModal : ApplyForm;
  // applyForm : FormGroup;
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email])
  });
  @ViewChild("applyFormData") sendForm: NgForm;

  constructor(private housingService: HousingService, private http: HttpClient) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocationData => {
      this.housingLocation = housingLocationData;
    });
    // this.housingService.getAllHousingLocationsData();
  }

  submitForm() {
    this.submitted = true;
    if (this.applyForm.valid) {
      // this.housingService.submitApplication(
      //   this.applyForm.value.firstName ?? '',
      //   this.applyForm.value.lastName ?? '',
      //   this.applyForm.value.email ?? ''
      // );
      console.log(this.applyForm.value.firstName);
      const formData = this.applyForm.value;
      console.log(formData);

      this.http.post('http://localhost:3000/posts', formData).subscribe(
        response => {
          // Handle the response here
          console.log('Form data posted successfully:', response);
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error('Error posting form data:', error);
        }
      );
      
    }
  }

  // submitForm() {
  //   this.submitted = true;
  //   if (this.applyForm.valid) {
  //     const formData = new FormData();
  //     formData.append('fname', this.applyForm.value.firstName);
  //     formData.append('lname', this.applyForm.value.lastName);
  
  //     this.http.post('http://localhost:3000/posts', formData).subscribe(
  //       response => {
  //         // Handle the response here
  //         console.log('Form data posted successfully:', response);
  //       },
  //       error => {
  //         // Handle any errors that occur during the HTTP request
  //         console.error('Error posting form data:', error);
  //       }
  //     );
  //   }
  // }

  submitFormData(formData: {fName: string, lName: string, email: string}) {
    console.log(formData);
    
  }
}
