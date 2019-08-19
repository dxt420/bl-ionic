import { AuthService } from './services/auth.service';
import { NgModule,enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ApiDjangoService } from './services/api-django.service';
import { HTTP } from '@ionic-native/http/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AccountKitService } from './services/account-kit.service';
import { IonicStorageModule } from '@ionic/storage';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { LocationService } from './services/location.service';

import { MbscModule } from '@mobiscroll/angular-lite';




@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    SearchFilterPageModule,
    MbscModule,
    IonicStorageModule.forRoot()
    
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    ApiDjangoService,
    HTTP,
    FilePath,
    Geolocation,
    AccountKitService,
    AuthService,
    AndroidPermissions,
    LocationService,
    LocationAccuracy,
    

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

enableProdMode();