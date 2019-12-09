import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AaCompareEqualModule } from 'aa-compare-equal';
import { VerifyMailDuplicateModule} from 'verify-mail-duplicate';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AaCompareEqualModule,
    VerifyMailDuplicateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
