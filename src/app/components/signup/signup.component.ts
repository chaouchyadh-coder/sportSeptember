import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // id de formulaire

  signupForm!: FormGroup;

  constructor(private formbulder: FormBuilder) { }




  ngOnInit() {
   this.signupForm = this.formbulder.group({

      firstName: ['',[Validators.required,Validators.minLength(3)] ],
      lastName: ['',[Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required,Validators.email]],
      pwd: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(8)]]

    })


  }


  signup() {

   console.log("her is user object", this.signupForm.value);
   

  }

}
