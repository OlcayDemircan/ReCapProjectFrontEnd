import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrlGetRental = 'https://localhost:44314/api/rentals/getall';
  apiUrlGetRentalDetails = 'https://localhost:44314/api/rentals/getdetails';

  constructor(private httpClient : HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrlGetRental);
  }

  getRentalDetails():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrlGetRentalDetails);
  }
}
