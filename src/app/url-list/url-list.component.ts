import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {
urlList;
  constructor(private userService:UserService) { }

  ngOnInit(){
    this.urlList = this.userService.getUrl();
  }

}
