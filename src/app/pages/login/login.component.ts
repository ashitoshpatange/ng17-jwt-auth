import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl ,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   form:FormGroup;

   constructor(private fb:FormBuilder){
       this.form = this.fb.group({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',Validators.required)
       })
   }

   onSubmit(){
    if(this.form.valid){
      console.log(this.form.value);
      this.form = this.fb.group({
        email: '',
        password: ''
       })
    }
   }
}
