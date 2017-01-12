import { User } from './../models/user';
import {Injectable} from '@angular/core';

const usersPromise:Promise<User[]> = Promise.resolve([
    {
        id:1,
        name:'nitin',
        username:'nitins311',
        avatar:'https://pbs.twimg.com/profile_images/537814384790089728/Lm7Wf1cb.jpeg'
    },
    {
        id:2,
        name:'vishnu',
        username:'vishnu311',
        avatar:'https://pbs.twimg.com/profile_images/812996958243540992/cCWNbDg8.jpg'
    },
    {
        id:3,
        name:'chetan',
        username:'chetan311',
        avatar:'https://pbs.twimg.com/profile_images/790215062174756864/R-fUw3Oq.jpg'
    }
]);


@Injectable()
export class UserService{

    //get all
    getUsers(){
        return usersPromise;
    }

    //get by specific value
    getUser(username){

        return usersPromise.then(users=> users.find(user => user.username === username));

        // let user = usersPromise.then(users =>{
        //     return users.find(user =>{
        //         return user.username === username;
        //     });
        // });
        // return user;
    }
}
