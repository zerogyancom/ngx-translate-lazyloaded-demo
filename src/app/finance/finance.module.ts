import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { FinanceRoutingModule } from './finance-routing.module';
import { HomeComponent } from './home/home.component';


export function httpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/fin/','.json');
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FinanceRoutingModule,
    TranslateModule.forChild({
      loader:{
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps:[HttpClient]
      },
      isolate:true
    })
  ]
})
export class FinanceModule { }
