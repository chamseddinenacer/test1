import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ASIDEComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ASIDEComponent
  ],
  imports: [
    BrowserModule,
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
