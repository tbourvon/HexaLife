import { SettingsPage } from '../../settings/settings';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  templateUrl: 'profile-home.html'
})
export class ProfilePageHome {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('doughnutCanvasNutrition') doughnutCanvasNutrition;
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvasNutrition') barCanvasNutrition;


  doughnutchart;
  constructor(public navCtrl: NavController) { }

  pushSettings() {
    this.navCtrl.push(SettingsPage)
  }

  doughnutChart: any;
  doughnutChartNutrition: any;
  barChart: any;
  barChartNutrition: any;

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Legs", "Arms", "Buttocks", "Abdominals"],
        datasets: [{
          label: 'Ratio of exercises',
          data: [32, 35, 18, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',

          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#36A2EB",

          ]
        }]
      }

    });

    this.doughnutChartNutrition = new Chart(this.doughnutCanvasNutrition.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Carbohydrates", "Fat", "Protein"],
        datasets: [{
          label: '# percentage',
          data: [35, 30, 35],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }

    });


    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"],
        datasets: [{
          label: 'kilometers',
          data: [123, 155, 143, 148, 137, 164, 153, 162, 142, 146, 159, 153],
          backgroundColor:
            'rgba(255, 99, 132, 0.2)',
          borderColor:
            'rgba(255,99,132,1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

    this.barChartNutrition = new Chart(this.barCanvasNutrition.nativeElement, {

      type: 'bar',
      data: {
        labels: ["7/11", "8/11", "9/11", "10/11", "11/11", "12/11", "13/11"],
        datasets: [{
          label: 'calories',
          data: [1834, 1852, 1720, 1838, 1793, 1764, 1853],
          backgroundColor:
            'rgba(255, 99, 132, 0.2)',
          borderColor:
            'rgba(255,99,132,1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });

  }



}


