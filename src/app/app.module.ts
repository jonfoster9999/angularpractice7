import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { FilterPipe } from './filter.pipe';
import { CoolComponentComponent } from './cool-component/cool-component.component';
import { MyRoutes } from './app.routes';
import { NiceComponentComponent } from './nice-component/nice-component.component';
import { CursorDirective } from './cursor.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    FilterPipe,
    CoolComponentComponent,
    NiceComponentComponent,
    CursorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyRoutes
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
