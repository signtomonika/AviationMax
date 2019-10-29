import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../../../services/aircraft.service';
import { Aircraft } from '@app/models/aircraft';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sa-add-aircraft',
  templateUrl: './add-aircraft.component.html',
  styleUrls: ['./add-aircraft.component.css']
})
export class AddAircraftComponent implements OnInit {

  aircraft : Aircraft = {

    hours:0,
    manager:'',
    tailnumber:'',
    type:''

  }

  constructor(private aircraftService : AircraftService) { }

  ngOnInit() {
  }


  addAircraft(form: NgForm) {
    

   this.aircraftService.addAircraft(this.aircraft);

   form.reset();

   return false;
    

  }

}
