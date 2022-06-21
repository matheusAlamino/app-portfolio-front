import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IVideo } from 'app/interfaces/ivideo';
import { VimeoApiService } from 'app/services/vimeo-api.service';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css']
})
export class ReelComponent implements OnInit {

    video_reel: SafeHtml;
    string_find_reel = 'Animation Reel_2021 - Felipe Iglesias';
    videoReel: IVideo

    constructor(private vimeoApiService: VimeoApiService,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.vimeoApiService.getReel().subscribe(result => {
            this.videoReel = result.data[0]
            this.video_reel = this.sanitizer.bypassSecurityTrustHtml(this.videoReel.embed.html);
        });
    }

}
