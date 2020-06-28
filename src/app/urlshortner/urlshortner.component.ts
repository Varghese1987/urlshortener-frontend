import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urlshortner',
  templateUrl: './urlshortner.component.html',
  styleUrls: ['./urlshortner.component.css']
})
export class UrlshortnerComponent implements OnInit {
data;
locationAndOtherDetails;
date;
urlForm: FormGroup;
  constructor(
    private userService : UserService,
    private fb:FormBuilder, 
    private http:HttpClient,
    private toastr : ToastrService,
    private router : Router,
    ) {
    this.urlForm = this.fb.group({
      url:this.fb.control("",Validators.required),
    })
   }

  ngOnInit(){
    this.userService.location().subscribe(data=>{
      this.locationAndOtherDetails = data;
      // console.log(this.locationAndOtherDetails)
      let day = new Date();
      this.date = moment(day).format("DD/MM/YYYY");
      // console.log(this.date)
      // console.log(localStorage.responseToken)
    });
  }

  convert(){
    let obj = {
      longUrl:this.urlForm.value.url,
      date:this.date,
      city:this.locationAndOtherDetails.city,
      country:this.locationAndOtherDetails.country,
      region:this.locationAndOtherDetails.region,
      userId:localStorage.responseId
    }
    console.log(obj)
    
    this.userService.addUrl(obj).subscribe((response)=>{
      console.log(response)
      this.router.navigate(["/userhome"]);
      this.toastr.success("success! check url list for converted links");
    })
  }

}
