import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IVideo } from 'app/interfaces/ivideo';
import { VimeoApiService } from 'app/services/vimeo-api.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

    video_reel: SafeHtml;
    string_find_reel = 'Animation Reel_2021 - Felipe Iglesias';
    videos: IVideo[];
    Title = '';
    Description = '';

    constructor(private vimeoApiService: VimeoApiService,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.getAllVideos()
    }

    getAllVideos() {
        this.vimeoApiService.getAll().subscribe(result => {
            this.videos = result.data;
            this.watchVideo(0);
        });
    }

    watchVideo(index: number, element: HTMLElement = null): void {
        this.video_reel = this.sanitizer.bypassSecurityTrustHtml(this.videos[index].embed.html);
        this.Title = this.videos[index].name;
        this.Description = this.videos[index].description;

        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
        }
    }
}
