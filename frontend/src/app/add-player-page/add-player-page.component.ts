import {Component} from '@angular/core';
import {Civilization} from '../services/game-types.type';
import {BackendClientService} from '../services/backend-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-player-page',
  templateUrl: './add-player-page.component.html',
  styleUrls: ['./add-player-page.component.scss']
})
export class AddPlayerPageComponent {
  gameSlug = '';
  Civilization = Object.keys(Civilization).filter(element => isNaN(Number(element)));

  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    civilization: new FormControl()
  });

  constructor(private router: Router, private route: ActivatedRoute, private backendClientService: BackendClientService) {
    this.route.params.subscribe(params => {
      this.gameSlug = params.gameSlug;
    });
  }

  addPlayer() {
    if (this.formGroup.invalid) {
      return;
    }

    this.backendClientService
      .addPlayerToGame(this.gameSlug, this.formGroup.get('username').value, this.formGroup.get('civilization').value)
      .subscribe(_ => {
        this.router.navigate(['..'], {relativeTo: this.route});
      });
  }
}
