import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatGridListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
