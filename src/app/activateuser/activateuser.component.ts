import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-activateuser',
  templateUrl: './activateuser.component.html',
  styleUrls: ['./activateuser.component.css']
})
export class ActivateuserComponent implements OnInit {

  userActivationString;
  data;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router:Router, 
    private userservice:UserService,
    private toastr: ToastrService
    ) {
    this.userActivationString = this.activatedRoute.snapshot.params.string;
    this.data={
        string:this.activatedRoute.snapshot.params.string
    }
   }

  ngOnInit(): void {
  }

  activate(){
    this.userservice.activateUser(this.data).subscribe((response)=>{
      console.log(response);
      this.toastr.success(response.message, 'Good Day!');
    })
    this.router.navigate(["/"]);
  }

}
