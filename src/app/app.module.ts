import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpModule} from "@angular/http";
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
