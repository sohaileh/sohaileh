import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PickdateDialogComponent } from '../pickdate-dialog/pickdate-dialog.component';
import { SafetyDashboardServiceService } from '../services/safety-dashboard-service.service';
import { environment } from '../../../environments/environment';
import { Observable, } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
// import { map } from 'highcharts';
// import { Chart } from 'angular-highcharts';
// import * as Highcharts from 'highcharts';
var Highcharts = require('highcharts');
@Component({
  selector: 'app-safety-dashboard',
  templateUrl: './safety-dashboard.component.html',
  styleUrls: ['./safety-dashboard.component.scss']
})
export class SafetyDashboardComponent implements OnInit {
  VideoList!: Observable<any>;
  barChartDataSet: any = [];
  // path: string = "../../../assets/";
  path: string = `${environment.apiUrl}videoStream/`
  videoSrc: any = '';
  panelOpenState: boolean = false
  videosObject: any = [];
  is_expand: boolean = false
  @ViewChild('video', { static: true }) video: any;
  SocialDistancingData: any = [];
  openVideoPlayerDiv: boolean = false
  HandWashData: any = [];
  currentViolationStart: any;
  currentClip: any;
  model: any = {}
  loggedInUser: any;
  constructor(private safetyDashboardService: SafetyDashboardServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.checkUrl()
    this.getVideos();
    // this.eventOccurrencesChart()
  }
  getVideos() {
    this.videosObject = this.safetyDashboardService.getVideos()
  }
  selectRow(event: any, item: any) {
    this.currentClip = item.clip;
  }
  onCollapse() {
    this.is_expand = false
  }
  closeVideoPlayer() {
    this.openVideoPlayerDiv = false;
  }
  convertviolationStartIntoMilliSeconds(start: any, violationStart: any) {
    // let ms = parseInt(start) + (violationStart * 1000)
    let ms = start;
    // let seconds = ms / 1000
    let y, mon, w, d, h, m, s, seconds;

    // if mmiliseconds are passed
    seconds = Math.floor(ms / 1000);
    m = Math.floor(seconds / 60);
    s = seconds % 60;

    h = Math.floor(m / 60);
    m = m % 60;

    d = Math.floor(h / 24);
    h = h % 24;
    return `${h <= 9 ? "0" + h : h}: ${m <= 9 ? "0" + m : m}: ${Math.trunc(s) <= 9 ? "0" + Math.trunc(s) : Math.trunc(s)
      }`;
  }
  checkTime(endTime: any) {
    if (this.video.currentTime >= endTime) {
      this.video.pause();
    } else {
      /* call checkTime every 1/10th 
         second until endTime */
      setTimeout(() => {
        this.checkTime(endTime), 100;
      });
    }
  }
  playVideo(clip: any, cameraName?: any, start?: any, end?: any, video?: any, ) {
    let _that = this;
    console.log()
    start = start ? start : 0;
    end = end ? end : 300
    this.openVideoPlayerDiv = true;
    this.videoSrc = `${this.path}${cameraName}/${clip}`;
    // this.videoSrc = `${environment.apiUrl}videoStream/Behavior_Analytics1.mp4/458427`;
    _that.video = document.getElementById('video');
    // let item = video.nativeElement
    if (_that.video) {
      var thePromise = _that.video.play();
      if (thePromise != undefined) {
        thePromise.then(function () {
          _that.video.pause();
          _that.video.currentTime = start;

        }).catch(function (error: any) {
          // Automatic playback failed.
          // Show a UI element to let the user manually start playback.
          console.log('hey i catch your video player issue');
        });;
        _that.video.currentTime = start;
        this.checkTime(end);
      }
    }
  }
  selectExpandedRow(event: any, item: any) {
    this.currentViolationStart = item.violationStart;
  }
  OnClipChange() {
    this.openVideoPlayerDiv = true;
    this.playVideo(this.model.clip)
  }
  ngAfterViewInit(): void {
    this.eventOccurrencesChart();
    this.eventsByTypeChart()
  }
  eventOccurrencesChart() {
    Highcharts.chart('eventOccurrencesChart', {
      chart: {
        type: 'spline'
      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        title: {
          text: 'Time'
        }
      },
      yAxis: {
        title: {
          text: 'Quantity'
        },
        min: 0
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e}: {point.y:.0f} events'
      },
      time: {
        useUTC: false
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: true
          }
        }
      },
      colors: ['#43a047', '#f44336', '#ff9800'],
      series: [{
        name: 'Safe Act',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 23.3, 18.3, 13.9, 9.6]
      },
      {
        name: 'Unsafe Act',
        data: [4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      },
      {
        name: 'Unsafe Condition',
        data: [4.2, 5.4, 8.5, 11.9, 1.2, 17.0, 16.6, 24.2, 10.4, 6.6, 4.8]
      }
      ]
    });
  }
  eventsByTypeChart() {
    Highcharts.chart('eventsByTypeChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      time: {
        useUTC: false
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name} ({point.percentage:.1f} %)' //'{point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Events By Type',
        colorByPoint: true,

        data: [{
          name: '',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: '',
          y: 11.84
        }, {
          name: '',
          y: 10.85
        }, {
          name: '',
          y: 4.67
        }]
      }]
    });

  }
  opendatePickerDialog() {
    let dialogRef = this.dialog.open(PickdateDialogComponent, {
      height: '250px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === true) {
        const searchkey = result.value.toString().substr(0, 15)
        // console.log(`Dialog result: ${JSON.stringify(result)}`);
        // this.videosObject = this.safetyDashboardService.getVideosByDate(searchkey);
        this.getDataWithInDateRange(searchkey)
      }
    });
  }
  getDataWithInDateRange(searchkey: any) {
    this.safetyDashboardService.getDataWithInDateRange(searchkey).subscribe((res: any) => {
      if (res.status === 200) {
        this.videosObject = res.data;
      }
    })
  }

}
