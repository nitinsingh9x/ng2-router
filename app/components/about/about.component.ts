import { UserService } from './../shared/services/user.services';
import { User } from './../shared/models/user';
import { Component, OnInit } from '@angular/core';



@Component({
    selector:'about-page',
    templateUrl:'./app/components/about/about.component.html',
    styles:[`
        .profile-card{
            background:#f3f3f3;
            border-radius: 4px;
            padding:30px;
            text-align:center;
        }
        .profile-card img {
            max-width:50%;
            margin:15px auto;
        }
    `]
})
export class AboutComponent implements OnInit{
    users:User[];

    /**
     *
     */
    constructor(private service:UserService) {}

    ngOnInit(){
        this.service.getUsers().then(users => this.users = users);
    }
}