import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ts:TranslateService) { }

  ngOnInit() {
    this.ts.setDefaultLang('en');
  }

  changeLang(lang){
    this.ts.use(lang);
  }

}
