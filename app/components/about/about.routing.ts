import { AboutSectionComponent } from './about-section.component';
import { ListComponent } from './list.components';
import { AboutUserComponent } from './about-user.component';
import { AboutComponent } from './about.component';
import { ModuleWithProviders } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

const aboutRoutes:Routes = [
    {
        path:'about',
        component:AboutSectionComponent,
        children:[
            {
                path:'',
                component:AboutComponent
            },
            {
                path:':username',
                component:AboutUserComponent
            },
            {path:'listss',component:ListComponent,outlet:'lis'}
        ]
    }
    
    
]

export const aboutRouting:ModuleWithProviders = RouterModule.forChild(aboutRoutes);