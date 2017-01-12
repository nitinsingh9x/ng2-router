import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes:Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'**', component:NotFoundComponent}
];

export const appRouting = RouterModule.forRoot(appRoutes);