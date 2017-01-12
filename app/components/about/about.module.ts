import { ListComponent } from './list.components';
import { AboutSectionComponent } from './about-section.component';
import { aboutRouting } from './about.routing';
import { UserService } from './../shared/services/user.services';
import { AboutUserComponent } from './about-user.component';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        aboutRouting
    ],
    declarations:[
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent,
        ListComponent
    ],
    providers:[
        UserService
    ]
})
export class AboutModule{}