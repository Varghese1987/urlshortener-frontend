import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../user.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  linkCountChart;
  
  constructor(private userService:UserService) {
    this.userService.getLinkCount().subscribe((response)=>{
      //console.log(response)
      let linkCount = Object.values(response)
      let chartDates = Object.keys(response)
      
        this.linkCountChart = new Chart ('confirm', {
          type:'bar',
          data:{
            labels: chartDates,
            datasets:[
              {
                data: linkCount,
                borderColor:'purple',
                fill:false,
              }
            ]
          },
          options:{
            legend:{
              display:false,
            },
            scales:{
              xAxes:[{
                display:true,
              }],
              yAxes:[{
                display: true,
              }]
            }
          }
        }); 
      
    })

  }
  ngOnInit(){
     
  } 
}
