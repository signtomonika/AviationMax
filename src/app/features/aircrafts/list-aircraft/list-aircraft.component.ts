import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../../../services/aircraft.service';
import { Observable } from 'rxjs';
import { Aircraft } from '@app/models/aircraft';


@Component({
  selector: 'sa-list-aircraft',
  templateUrl: './list-aircraft.component.html',
  styleUrls: ['./list-aircraft.component.css']
})
export class ListAircraftComponent implements OnInit {

  options: any;

  aircrafts: Aircraft[];

  /***** Dynamic Image Path building *****/

  imgFolder = "assets/img/aircraft/"

  imgExtn = ".png";

  /***** Dynamic Edit / Delete element visibility *****/

  editState: boolean = false;

  aircraftToEdit: Aircraft;

  isAircraftEdit: boolean = false;

  constructor(private aircraftService: AircraftService) {

  }

  ngOnInit() {

    this.aircraftService.getAirCraftList().subscribe(

      (data) => {
        this.aircrafts = data;
      }
    )


  }


  /***** Dynamic Options Visibility *****/

  showAircraftOptions(aircraft) {

    if (!this.editState) {

      this.editState = true;

      this.aircraftToEdit = aircraft;
    } else {

      this.editState = false;


    }

  }

  /***** Delete Aircraft *****/

  deleteAircraft(aircraft) {

    this.aircraftService.deleteAircraft(aircraft);

  }

  /***** Dynamic Edit Aircraft form Visibility *****/

  showEdit(aircraft) {

    if (!this.isAircraftEdit) {

      this.isAircraftEdit = true;

      this.aircraftToEdit = aircraft;
    } else {

      this.isAircraftEdit = false;


    }


  }

  /***** Edit Aircraft *****/

  updateAircraft(aircraft) {

    this.aircraftService.editAircraft(aircraft);

    this.showEdit(aircraft);

    this.showAircraftOptions(aircraft);

  }




}
