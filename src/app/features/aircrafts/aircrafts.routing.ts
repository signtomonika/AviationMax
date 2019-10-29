
import {Routes, RouterModule} from "@angular/router";
import { ListAircraftComponent } from "./list-aircraft/list-aircraft.component";


export const routes:Routes = [
  {
    path: '',
    component: ListAircraftComponent
  }
];

export const routing = RouterModule.forChild(routes)
