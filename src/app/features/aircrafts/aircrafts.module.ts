import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAircraftComponent } from './list-aircraft/list-aircraft.component';
import { routing } from './aircrafts.routing';
import { SmartadminWidgetsModule } from '@app/shared/widgets/smartadmin-widgets.module';
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@env/environment';
import { AircraftService } from '@app/services/aircraft.service';
import { AddAircraftComponent } from './add-aircraft/add-aircraft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AircraftFilterPipe } from './list-aircraft/aircraft-filter.pipe';




@NgModule({
  declarations: [ListAircraftComponent, AddAircraftComponent,  AircraftFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    SmartadminWidgetsModule,
    SmartadminDatatableModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase,'aviationMax') ,
    AngularFirestoreModule
    
  ],
  providers:[ AircraftService]
})
export class AircraftsModule { }
