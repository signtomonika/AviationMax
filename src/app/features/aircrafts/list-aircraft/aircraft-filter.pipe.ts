import { Pipe, PipeTransform } from '@angular/core';
import { Aircraft } from '@app/models/aircraft';

@Pipe({
  name: 'aircraftFilter'
})
export class AircraftFilterPipe implements PipeTransform {

  transform(aircraftList: any[], filterText: string): Aircraft[] {

    if(!aircraftList || !filterText){

      return aircraftList;

    } 

    return aircraftList.filter(aircraft => aircraft.type.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);

    //return aircraftList ? aircraftList.filter(aircraft => aircraft.type.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
