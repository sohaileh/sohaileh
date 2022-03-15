import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SafetyDashboardServiceService {
  apiUrl = environment.apiUrl
  videosArray: any = []
  constructor(private http: HttpClient) {
    this.videosArray = [
      {
        clip: 'Out_fork_Camera16-02112022-0304-1644138240.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "16",
        category: 'Non Compliance',
        description: 'Too Close to Forklift',
      },
      {
        clip: 'Out_OOF_Camera16-02211022-1820-1645402800.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "16",
        category: 'Non Compliance',
        description: 'Object on Floor',

      },
      {
        clip: 'Out_fork_Camera24-02112022-2334-1644974760.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "24",
        category: 'Non Compliance',
        description: 'Too Close to Forklift',

      },
      {
        clip: 'Out_OOF_Camera24-02112022-2320-1644988800.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "24",
        category: 'Non Compliance',
        description: 'Object on Floor',

      },
      {
        clip: 'Out_Pedes_Camera24-02112022-1926-1644974760.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "24",
        category: 'Non Compliance',
        description: 'Pedestrian Compliance',

      },
      {
        clip: 'Out_Pedes_Camera24-02112022-1123-1644945836.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "24",
        category: 'Non Compliance',
        description: 'Pedestrian Compliance',

      },
      {
        clip: 'Out_Pedes_Camera24-02112022-2334-1644989640.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "24",
        category: 'Non Compliance',
        description: 'Pedestrian Compliance',
      },
      {
        clip: 'Out_OOF_Camera25-02122022-1858-1644454680.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "25",
        category: 'Non Compliance',
        description: 'Object On Floor',
      },
      {
        clip: 'Out_Pedes_Camera25-02212022-1854-1645404840.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "25",
        category: 'Non Compliance',
        description: 'Pedestrian Compliance',
      },
      {
        clip: 'Out_Pedes_Camera25-02122022-1858-1644454680.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "25",
        category: 'Non Compliance',
        description: 'Pedestrian Compliance',
      },
      {
        clip: 'Out_Pedes_Camera25-02122022-2030-1645410600.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "25",
        category: 'Non Compliance',
        description: 'Pedestrian Compliance',
      },
      {
        clip: 'Out_Fork_Comp_Camera25-02122022-2030-1645410600.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "25",
        category: 'Compliance',
        description: 'Too Close to Forklift Compliance',
      },

      // {
      //   clip: 'Out_fork_Camera33-02122022-1910-1644973800.webm',
      //   start: 'Sat Feb 12 2022',
      //   cameraName: "33",
      //   category: 'Non Compliance',
      //   description: 'Too close to Forklift',
      // },
      {
        clip: 'Out_Fork__Comp_Camera33-02211022-2052-1645411920.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "33",
        category: 'Compliance',
        description: 'Too Close to Forklift Compliance',
      },
      {
        clip: 'Out_Pedes__Comp_Camera33-02122022-2052-1645411920.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "33",
        category: 'Compliance',
        description: 'Pedestrian Compliance',
      },
      {
        clip: 'Out_OOF_Camera34-02122022-1922-1644283320.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "34",
        category: 'Non Compliance',
        description: 'Object On Floor',
      },
      {
        clip: 'Out_Pedes_Camera34-02122022-1908-1644973680.webm',
        start: 'Sat Feb 12 2022',
        cameraName: "34",
        category: 'Non Compliance',
        description: 'Pedestrian Non Compliance',
      },

      {
        clip: 'Out_handWash_Camera36-02112022-0304-1644138240.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "36",
        category: 'Non Compliance',
        description: 'HandWash Non Compliance',
      },
      {
        clip: 'Out_handWash_Camera36-02112022-0512-1644138240.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "36",
        category: 'Compliance',
        description: 'HandWash Compliance',
      },
      {
        clip: 'Out_handWash_Camera36-02112022-0358-1644138240.webm',
        start: 'Fri Feb 11 2022',
        cameraName: "36",
        category: 'Non Compliance',
        description: 'HandWash Non Compliance',
      },
    ]
  }
  getVideos() {
    return this.videosArray
  }
  // getVideosByDate(key: any) {
  //   console.log(key)
  //   return this.videosArray.filter((x: any) => x.start === key)
  // }
  getDataWithInDateRange(start: any) {
    return this.http.get(`${this.apiUrl}get-data/${start}`)
  }

}