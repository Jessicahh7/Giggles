import { Response } from '@angular/http';
import { GiggleService } from '../services/giggle.services';
import Giggle from '../models/giggle.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giggle',
  templateUrl: './giggle.component.html',
  styleUrls: ['./giggle.component.scss']
})
export class GiggleComponent implements OnInit {

  constructor(
    //Private service will be injected into the component by Angular Dependency Injector
    private giggleService: GiggleService
  ) { }

  //Declaring the new Giggle Object and initilizing it
  public newGiggle: Giggle = new Giggle()

  //An Empty list for the visible Giggle list
  gigglesList: Giggle[];
  editGiggles: Giggle[] = [];


  ngOnInit(): void {

    //At component initialization the 
    this.giggleService.getGiggles()
      .subscribe(giggles => {
        //assign the list property to the proper http response
        this.gigglesList = giggles
        console.log(giggles)
      })
}

//This method will get called on Create button event
create() {
  this.giggleService.createGiggle(this.newGiggle)
    .subscribe((res) => {
      this.gigglesList.push(res.data)
      this.newGiggle = new Giggle()
    })
}

editGiggle(giggle: Giggle) {
  console.log(giggle)
   if(this.gigglesList.includes(giggle)){
    if(!this.editGiggles.includes(giggle)){
      this.editGiggles.push(giggle)
    }else{
      this.editGiggles.splice(this.editGiggles.indexOf(giggle), 1)
      this.giggleService.editGiggle(giggle).subscribe(res => {
        console.log('Update Succesful')
       }, err => {
          // this.editGiggle(giggle)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneGiggle(giggle:Giggle){
    giggle.status = 'Done'
    this.giggleService.editGiggle(giggle).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      // this.editGiggle(giggle)
      console.error('Update Unsuccesful')
    })
  }

  submitGiggle(event, giggle:Giggle){
    if(event.keyCode ==13){
      this.editGiggle(giggle)
    }
  }

  deleteGiggle(giggle: Giggle) {
    this.giggleService.deleteGiggle(giggle._id).subscribe(res => {
      this.gigglesList.splice(this.gigglesList.indexOf(giggle), 1);
    })
  }

}
