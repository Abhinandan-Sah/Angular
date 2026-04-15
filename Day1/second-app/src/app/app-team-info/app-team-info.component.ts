import { Component } from '@angular/core';

@Component({
  selector: 'app-app-team-info',
  templateUrl: './app-team-info.component.html',
  styleUrl: './app-team-info.component.css'
})
export class AppTeamInfoComponent {
  teams: any=[
    {tid:1, tname: 'sam', tlogo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/orange-ninja-esports-team-logo-design-template-1c553ff004b390c66f017d133e14f65e_screen.jpg?ts=1734420042", tslogan:'Great thing comes out by trying shit ones'},
    {tid:2, tname: 'Everger', tlogo: "https://images-platform.99static.com//Ayl8fHef30QCR3VCjNXNnJYKxnA=/112x82:845x815/fit-in/500x500/99designs-contests-attachments/151/151427/attachment_151427974", tslogan:'V2 Great thing comes out by trying shit ones'}
  ]
}
