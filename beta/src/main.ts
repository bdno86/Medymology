
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { MedymologyAppComponent, environment } from './app/';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[HTTP_PROVIDERS,ROUTER_PROVIDERS]);

