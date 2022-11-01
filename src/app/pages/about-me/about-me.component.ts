import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IPictureThumbnail } from 'app/interfaces/ipicturethumbnail';
import { IVideo } from 'app/interfaces/ivideo';
import { VimeoApiService } from 'app/services/vimeo-api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

    constructor(private vimeoApiService: VimeoApiService,
        private sanitizer: DomSanitizer) { }

    pictures: IPictureThumbnail[] = [];
    videos: IVideo[];
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
        this.vimeoApiService.getAll().subscribe(result => {
            this.videos = result.data;
            this.videos.forEach((item, index) => {
                this.pictures.push({
                    name: this.videos[index]['name'],
                    thumbnail: this.videos[index]['pictures']['sizes'][6]['link']
                });
            })
        });
    }
}
