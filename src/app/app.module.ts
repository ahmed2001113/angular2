import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebaComponent } from './naveba/naveba.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BissnesComponent } from './bissnes/bissnes.component';
import { PipePipe } from './pipe.pipe';
import { AgePipe } from './age.pipe';
import { ServicePipe } from './service.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavebaComponent,
    HomeComponent,
    FooterComponent,
    BissnesComponent,
    PipePipe,
    AgePipe,
    ServicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
