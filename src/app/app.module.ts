import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { SearchboxComponent } from './shared/searchbox/searchbox.component';
import { ResultsComponent } from './shared/results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { UserboxComponent } from './components/userbox/userbox.component';
import { RepoboxComponent } from './components/repobox/repobox.component';
import { DateAsAgoPipe } from './pipes/date-as-ago.pipe';
import { FormsModule } from '@angular/forms';
import { SortByOrderPipe } from './pipes/sort-by-order.pipe';
import { MinisearchboxComponent } from './components/minisearchbox/minisearchbox.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchboxComponent,
    ResultsComponent,
    UserboxComponent,
    RepoboxComponent,
    DateAsAgoPipe,
    SortByOrderPipe,
    MinisearchboxComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
