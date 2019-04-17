import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warningalert.component';
import { WarningsComponent } from './warnings/warnings.component';
import { SuccessComponent } from './success/successalert.component';
import { SuccesssComponent } from './successs/successs.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    WarningsComponent,
    SuccessComponent,
    SuccesssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
