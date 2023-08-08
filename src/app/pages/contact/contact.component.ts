import { Component, OnInit } from '@angular/core';
import { VimeoApiService } from 'app/services/vimeo-api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  focus: any;
  focus1: any;

  constructor(private vimeoApiService: VimeoApiService,
    private translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.vimeoApiService.getAll().subscribe(result => {
      console.log(result);
    });
  }

}
