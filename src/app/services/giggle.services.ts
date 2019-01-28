import Giggle from '../models/giggle.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class GiggleService {

  api_url = 'http://localhost:3000';
  giggleUrl = `${this.api_url}/api/giggles`;

  constructor(private http: HttpClient) {}

  //Create giggle, takes a Giggle Object
    createGiggle(giggle: Giggle): Observable<any>{
        //returns the observable of http post request 
        return this.http.post(`${this.giggleUrl}`, giggle);
  }

//Read Giggle, takes no arguments
    getGiggles(): Observable<Giggle[]>{
        return this.http.get(this.giggleUrl)
        .pipe(map(res  => {
        //Maps the response object sent from the server
            // console.log(res);
        return res["data"].docs as Giggle[];
    }))
  }

    //Update Giggle, takes a Giggle Object as parameter
    editGiggle(giggle:Giggle){
        let editUrl = `${this.giggleUrl}`
        //returns the observable of http put request 
        return this.http.put(editUrl, giggle);
  }

    deleteGiggle(id:string):any{
        //Delete the object by the id
        let deleteUrl = `${this.giggleUrl}/${id}`
        return this.http.delete(deleteUrl)
        .pipe(map(res  => {
        return res;
        }))
    }
  
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        // for demo purposes only
        return Promise.reject(error.message || error);
      }

}

