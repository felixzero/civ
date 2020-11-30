import {Component, OnInit} from '@angular/core';
import { getBrowserLang, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    this.translocoService.setActiveLang(getBrowserLang());
  }
}
