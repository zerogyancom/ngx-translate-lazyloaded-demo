import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private translateService:TranslateService) {
    translateService.setDefaultLang('en');
   }

  ngOnInit() {
  }
  changeLang(lang){
    this.translateService.use(lang);
  }
}
