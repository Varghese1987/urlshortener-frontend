import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  signout(){
    localStorage.removeItem('responseToken');
    localStorage.removeItem('responseId');
    this.router.navigate(['/']);
    this.toastr.warning('You have been Logged Out!');    
  }

}
