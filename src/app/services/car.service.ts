import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrlGetCars = 'https://localhost:44314/api/cars/getall';
  apiUrlGetCarDetails = 'https://localhost:44314/api/cars/getdetails';

  constructor(private httpClient: HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrlGetCars);
  }

  getCarDetails() : Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrlGetCarDetails);
  } 
}
