import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {BackendClientService} from '../services/backend-client.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(private router: Router, private backendClientService: BackendClientService) {}

  onNewGameClicked() {
    this.backendClientService.createNewGame().subscribe(slug => {
      this.router.navigate([slug]);
    });
  }
}
