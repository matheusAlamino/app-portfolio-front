import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailManagerService } from 'app/services/mail-manager.service';
import { VimeoApiService } from 'app/services/vimeo-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  focus: any;
  focus1: any;
  hasError: boolean = false;
  contactMeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private mailManagerService: MailManagerService) { }

  ngOnInit(): void {
  }

  sendMail() {
    if (!this.contactMeForm.valid)
    {
      this.hasError = true;
      return false;
    }
    
    this.mailManagerService
      .sendMailContactMe(this.contactMeForm.value)
      .subscribe(response => {
        window.alert("Mail sent with success!");
      }, error => {
        window.alert("Was not possible send the mail, please try again later!");
      });
  }
}
