import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateDroneService {

  constructor(private http: HttpClient) { }

  createDrone(drone: any): Observable<any>{
    return this.http.post('droneUserApi/drone', drone)
  }

  getDrone(droneId): Observable<any>{
    return this.http.get('droneUserApi/drone/' + droneId);
  }

  editDrone(drone: any): Observable<any>{
    return this.http.put('droneUserApi/drone', drone);
  }
}
