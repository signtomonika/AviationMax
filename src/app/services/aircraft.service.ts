import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Aircraft } from '../models/aircraft';
import { map } from 'rxjs/operators';




@Injectable()
export class AircraftService {

  aircraftCollection: AngularFirestoreCollection<Aircraft>; // collection of type aircraft interface in models

  aircrafts: Observable<Aircraft[]>;

  aircraftDoc : AngularFirestoreDocument<Aircraft>;

  constructor(private firestoreDb: AngularFirestore) {

          
  }

  ngOnInit(){

  }

  getAirCraftList() {

  //  return  this.firestoreDb.collection('aircraft').valueChanges(); //returns collection data without ID

   return  this.firestoreDb.collection('aircraft',ref=> ref.orderBy('manager','asc') ).snapshotChanges().pipe(map(    //returns data with document id

      (changes)=>{

        return changes.map(
          a=>{

            const data = a.payload.doc.data() as Aircraft;
            data.id = a.payload.doc.id
            return data;
          }
        )
      }

    ))

   // return this.aircrafts


  }


  addAircraft(aircraft: Aircraft){

    this.firestoreDb.collection('aircraft').add(aircraft);


  }


  deleteAircraft(aircraft: Aircraft){

    this.aircraftDoc = this.firestoreDb.doc(`aircraft/${aircraft.id}`);

    this.aircraftDoc.delete();

  }


  editAircraft(aircraft: Aircraft){

    this.aircraftDoc = this.firestoreDb.doc(`aircraft/${aircraft.id}`);

    this.aircraftDoc.update(aircraft);

  }

}

