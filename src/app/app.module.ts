import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './custom-option';
import {ToastOptions} from 'ng2-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from  './directory/directory.component';
import { NewComponentComponent } from './new-component/new-component.component';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule,
         MatMenuModule,
         MatButtonModule,
         MatCheckboxModule,
         MatFormFieldModule,
         MatInputModule,
         MatSidenavModule,
         MatListModule,
         MatCardModule
      } from '@angular/material';

const routes: Routes = [
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: 'new',
    component: NewComponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponentComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    ToastModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  providers: [DataService, {provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }
