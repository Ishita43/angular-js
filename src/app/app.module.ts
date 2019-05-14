import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdnvComponent } from './sdnv/sdnv.component';
import { TpnvComponent } from './tpnv/tpnv.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FriendsComponent } from './friends/friends.component';
import { DefaultComponent } from './default/default.component';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';
import { Dash1Component } from './dash1/dash1.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { Dash2Component } from './dash2/dash2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SdnvComponent,
    TpnvComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    FriendsComponent,
    DefaultComponent,
    DataComponent,
    Dash1Component,
    PopupComponent,
    Dash2Component
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent]

})
export class AppModule { }
