import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    .active{
        text-decoration: none;
        background-color: #eee;
    }
  `],
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  message = 'This is the sample message.';
}