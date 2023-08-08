import { Component, OnInit } from '@angular/core';
import { VimeoApiService } from 'app/services/vimeo-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  focus: any;
  focus1: any;

  constructor(private vimeoApiService: VimeoApiService) {
  }

  ngOnInit(): void {
    this.vimeoApiService.getAll().subscribe(result => {
      console.log(result);
    });
  }
}
