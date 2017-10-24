import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
