import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {SlideshowModule} from 'ng-simple-slideshow';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [MatSidenavModule, MatIconModule,
    BrowserAnimationsModule, MatMenuModule,
    MatMenuModule, MatButtonModule,
    MatToolbarModule, MatListModule,
    SlideshowModule, MatDividerModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
