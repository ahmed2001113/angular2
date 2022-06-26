import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BissnesComponent } from './bissnes/bissnes.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home' , component:HomeComponent} ,
  {path: 'bissnes' , component:BissnesComponent}, 
  {path: 'footer' , component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
