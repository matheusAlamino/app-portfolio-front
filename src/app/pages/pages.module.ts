import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ReelComponent } from './reel/reel.component';



@NgModule({
  declarations: [
      AboutMeComponent,
      ContactComponent,
      ReelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ]
})
export class PagesModule { }
