import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [

  {

    path: '',
    data: { pageTitle: "Login" },
    redirectTo: "auth/login",
    pathMatch: "full"
  },

  {
    path: 'home',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
            {
        path: '',
        loadChildren: "./features/home/home.module#HomeModule"
      },
      {
        path: 'aircrafts',
        loadChildren: "./features/aircrafts/aircrafts.module#AircraftsModule"
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: "./features/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
