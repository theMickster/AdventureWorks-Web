import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './oops/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PlaygroundComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PlaygroundComponent,
    PageNotFoundComponent
  ]
})
export class PublicModule { }
