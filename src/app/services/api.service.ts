import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    

  constructor(private http:HttpClient) { }


  getDummies():Observable<any>{
    return this.http.get("https://dummyjson.com/users");
  }
}
