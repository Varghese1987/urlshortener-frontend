import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private userService:UserService,    
    private fb:FormBuilder, 
    private http:HttpClient,
    private toastr : ToastrService,
    private router : Router,
    ) {
    this.registerForm = this.fb.group({
      firstName:this.fb.control("",Validators.required),
      lastName:this.fb.control("",Validators.required),
      email:this.fb.control("",[Validators.required,Validators.email]),
      password:this.fb.control("",Validators.required)
    })
   }

  ngOnInit(): void {
  }
  register(){
    this.userService.addUser(this.registerForm.value).subscribe((response)=>{
      console.log(response)
      this.router.navigate(["/"]);
      this.toastr.success("Check your mail for activation link!");   
    })
  }

}
