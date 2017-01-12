import { UserService } from './../shared/services/user.services';
import { User } from './../shared/models/user';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';




@Component({
    selector:'about-user',
    templateUrl:'./app/components/about/about-user.component.html',
    styles:[`
        img{
            max-width:30%;
            margin:20px auto;
        }
    `]
})
export class AboutUserComponent implements OnInit{
    user:User;


    /**
     * Created By: Nitin Singh
     * 
     */
    constructor(
        private route:ActivatedRoute,
        private service:UserService,
        private router:Router
        ) {}

    ngOnInit(){
        let username = this.route.snapshot.params['username'];
        this.service.getUser(username).then(user=> this.user = user);
    }

    goBack(){
        this.router.navigate(['/about']);
    }
}