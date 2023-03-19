import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeDashboardComponent } from "./employee-dashboard/employee-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { RectComponent } from "./rect/rect.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:EmployeeDashboardComponent},
  {path:'react',component:RectComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
