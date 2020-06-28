import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Subject } from "rxjs";
import { LinkReportComponent } from './../link-report/link-report.component';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

  @ViewChild(LinkReportComponent, { static: false }) childC: LinkReportComponent;
  showChild: boolean = true;

hitUrlData;
urlList;
hitData;
isData = false;
  constructor(private userService:UserService) {
    this.userService.getUrl().subscribe(data=>{
      //console.log(data)
      this.hitUrlData = data.map(item => item.hit.length);
      //console.log(this.hitUrlData)
    
    })
   }

  ngOnInit(){
    this.urlList = this.userService.getUrl();    
  }
  urlData(id){
    this.userService.getUrl().subscribe(data=>{
      //console.log(data)
      this.urlData = data.find(item => item._id == id);
      console.log(this.urlData)
    
    })
  }

  onUpdateChild(id) {
    this.childC.update(id);
  }

}
