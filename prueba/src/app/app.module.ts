import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { OwnerService } from './list-pets/owner.service';
import { HttpClientModule } from '@angular/common/http';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TextComponent } from './user/text/text.component';
import { ButtonComponent } from './user/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchComponent,
    ListPetsComponent,
    HomeComponent,
    UserComponent,
    TextComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OwnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
