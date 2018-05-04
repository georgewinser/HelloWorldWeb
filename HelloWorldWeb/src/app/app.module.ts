import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { EurocurrencyComponent } from './eurocurrency/eurocurrency.component';
import { GbpcurrencyComponent } from './gbpcurrency/gbpcurrency.component';
import { UsdcurrencyComponent } from './usdcurrency/usdcurrency.component';
@NgModule({
    declarations: [
        AppComponent,
        GbpcurrencyComponent,
        EurocurrencyComponent,
        UsdcurrencyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
