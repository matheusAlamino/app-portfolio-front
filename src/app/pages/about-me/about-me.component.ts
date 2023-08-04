import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { IPictureThumbnail } from 'app/interfaces/ipicturethumbnail';
import { IThumbanail, IVideo } from 'app/interfaces/ivideo';
import { VimeoApiService } from 'app/services/vimeo-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private vimeoApiService: VimeoApiService,
    private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  pictures: IPictureThumbnail[] = [];
  thumbnails: IThumbanail[];
  customOptions: OwlOptions = {
    loop: true,
    margin: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    merge: true,
    mergeFit: true,
    autoplaySpeed: 1000,
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    }
  }

  customOptions2: OwlOptions = {
    loop: true,
    margin: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    startPosition: 4,
    merge: true,
    mergeFit: true,
    autoplaySpeed: 1000,
    rtl: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    }
  }

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos() {
    this.vimeoApiService.getThumbnails().subscribe(result => {
      this.thumbnails = result.data;
      this.thumbnails.forEach((item, index) => {
        this.pictures.push({
          name: this.thumbnails[index]['name'],
          thumbnail: this.thumbnails[index]['pictures']['sizes'][6]['link']
        });
      })
    });
  }
}
