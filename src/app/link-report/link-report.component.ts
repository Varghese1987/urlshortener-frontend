import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from "rxjs";
import { Chart, } from 'chart.js';



@Component({
  selector: 'app-link-report',
  templateUrl: './link-report.component.html',
  styleUrls: ['./link-report.component.css']
})
export class LinkReportComponent implements OnInit {
  isCopied1: boolean = false;
  isCopied2: boolean = false;
urlData
hitData
isData = false
myDoughnutChart;
chartHitData;
  constructor(private userService : UserService, private activatedRoute : ActivatedRoute) {

   }

  ngOnInit(){
    

}
id;
update(id){
  this.id = id;
  // console.log(this.id)
  this.userService.getUrl().subscribe(data=>{
    //console.log(data)
    this.urlData = data.find(item => item._id == id);
    //console.log(this.urlData)
    this.hitData = this.urlData.hit
    //this.chartHitData = this.hitData.length;
    //console.log(this.hitData)
    // this.myDoughnutChart = new Chart ('ctx', {
    //   type:'line',
    //   data:{
    //     labels: ['hits'],
    //     datasets:[
    //       {
    //         data: this.chartHitData,
    //         borderColor:'purple',
    //         fill:true,
    //       }
    //     ]
    //   },
    //   options:Chart.defaults.doughnut,
    // }); 
    this.isData = true; 
})
}


}

