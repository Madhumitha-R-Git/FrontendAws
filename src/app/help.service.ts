import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from 'src/data';


@Injectable({
  providedIn: 'root'
})
export class HelpService {
  private url = 'http://localhost:3000/register'

  constructor(private __http : HttpClient) { }

  add_details(data: Data)
  {
    console.log(data);
    return this.__http.post<Data>(this.url,data)
   
  }
  check_details(data:Data)
  {
    return this.__http.get<Data>(this.url)
    
  }
}
