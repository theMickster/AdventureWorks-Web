import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";

const routes: Routes =[
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: '',
    component: PlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule{}
