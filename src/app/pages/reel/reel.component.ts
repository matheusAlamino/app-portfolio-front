import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { VimeoApiService } from 'app/services/vimeo-api.service';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css']
})
export class ReelComponent implements OnInit {

    video_reel: SafeHtml;
    string_find_reel = 'Animation Reel_2021 - Felipe Iglesias';

    constructor(private vimeoApiService: VimeoApiService,
        private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.vimeoApiService.getAll().subscribe(result => {
            console.log(result.result.data);
            const videoFinded = result.result.data.find(a => a.name === this.string_find_reel);
            this.video_reel = this.sanitizer.bypassSecurityTrustHtml(videoFinded.embed.html);
            console.log(this.video_reel);
        });
    }

}
