import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { StaticComponent } from './static/static.component'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InfoComponent,
    MapComponent,
    FormComponent,
    ListComponent,
    StaticComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-PiYX-n4UvGvQgPTypP8Jt5272G09cxQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
