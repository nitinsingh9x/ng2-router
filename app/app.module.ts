import { AboutModule } from './components/about/about.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { appRouting } from './app.routing';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
         BrowserModule,
         FormsModule,
         AboutModule,
         appRouting
   ],
  declarations: [ 
          AppComponent,
          HomeComponent,
          ContactComponent,
          NotFoundComponent
   ],
   providers:[
      
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}